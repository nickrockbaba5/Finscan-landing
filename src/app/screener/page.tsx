'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { getScreenerResults, ScreenerResult } from '@/lib/api';
import {
  Search, Filter, TrendingUp, TrendingDown, BarChart3, Building2,
  DollarSign, Activity, ArrowUpRight, ArrowDownRight, Loader2
} from 'lucide-react';

export default function GlobalScreener() {
  const router = useRouter();
  const { theme } = useTheme();
  const [results, setResults] = useState<ScreenerResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'score' | 'market_cap' | 'price'>('score');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Filter states
  const [filters, setFilters] = useState({
    min_market_cap: '',
    max_pe: '',
    min_roe: '',
    sector: '',
    limit: 50
  });

  const isDark = theme === 'dark';

  useEffect(() => {
    fetchScreenerData();
  }, []);

  async function fetchScreenerData() {
    try {
      setLoading(true);
      setError(null);

      const params: any = { limit: filters.limit };

      if (filters.min_market_cap) params.min_market_cap = parseFloat(filters.min_market_cap);
      if (filters.max_pe) params.max_pe = parseFloat(filters.max_pe);
      if (filters.min_roe) params.min_roe = parseFloat(filters.min_roe);
      if (filters.sector) params.sector = filters.sector;

      const data = await getScreenerResults(params);
      setResults(data.screener_results || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load screener data');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  const handleApplyFilters = () => {
    fetchScreenerData();
  };

  const handleResetFilters = () => {
    setFilters({
      min_market_cap: '',
      max_pe: '',
      min_roe: '',
      sector: '',
      limit: 50
    });
    setTimeout(() => fetchScreenerData(), 100);
  };

  // Filter and sort results
  const filteredResults = results
    .filter(stock => {
      if (!searchTerm) return true;
      const search = searchTerm.toLowerCase();
      return (
        stock.symbol.toLowerCase().includes(search) ||
        stock.name.toLowerCase().includes(search) ||
        stock.sector?.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => {
      let aVal = 0, bVal = 0;

      switch (sortBy) {
        case 'score':
          aVal = a.finscan_score || 0;
          bVal = b.finscan_score || 0;
          break;
        case 'market_cap':
          aVal = a.market_cap || 0;
          bVal = b.market_cap || 0;
          break;
        case 'price':
          aVal = a.price || 0;
          bVal = b.price || 0;
          break;
      }

      return sortOrder === 'desc' ? bVal - aVal : aVal - bVal;
    });

  const getScoreColor = (score: number) => {
    if (score >= 80) return isDark ? 'text-green-400' : 'text-green-600';
    if (score >= 60) return isDark ? 'text-blue-400' : 'text-blue-600';
    if (score >= 40) return isDark ? 'text-yellow-400' : 'text-yellow-600';
    return isDark ? 'text-red-400' : 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return isDark ? 'bg-green-900/30' : 'bg-green-100';
    if (score >= 60) return isDark ? 'bg-blue-900/30' : 'bg-blue-100';
    if (score >= 40) return isDark ? 'bg-yellow-900/30' : 'bg-yellow-100';
    return isDark ? 'bg-red-900/30' : 'bg-red-100';
  };

  const formatMarketCap = (value: number) => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toFixed(2)}`;
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-[1600px] mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Global Stock Screener
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            30,000+ equities powered by FINSCAN Intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* LEFT SIDEBAR - Filters */}
          <div className={`lg:col-span-1 rounded-lg p-6 h-fit ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <div className="flex items-center gap-2 mb-6">
              <Filter size={20} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
              <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Filters
              </h2>
            </div>

            <div className="space-y-4">
              {/* Market Cap Filter */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Min Market Cap
                </label>
                <input
                  type="number"
                  placeholder="e.g., 1000000000"
                  value={filters.min_market_cap}
                  onChange={(e) => setFilters({...filters, min_market_cap: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
                <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Enter value in USD (e.g., 1B = 1000000000)
                </p>
              </div>

              {/* P/E Ratio Filter */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Max P/E Ratio
                </label>
                <input
                  type="number"
                  placeholder="e.g., 25"
                  value={filters.max_pe}
                  onChange={(e) => setFilters({...filters, max_pe: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
              </div>

              {/* ROE Filter */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Min ROE (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g., 0.15 (15%)"
                  value={filters.min_roe}
                  onChange={(e) => setFilters({...filters, min_roe: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                />
              </div>

              {/* Sector Filter */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Sector
                </label>
                <select
                  value={filters.sector}
                  onChange={(e) => setFilters({...filters, sector: e.target.value})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                >
                  <option value="">All Sectors</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Financial">Financial</option>
                  <option value="Consumer">Consumer</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Energy">Energy</option>
                  <option value="Materials">Materials</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Real Estate">Real Estate</option>
                </select>
              </div>

              {/* Limit */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Results Limit
                </label>
                <select
                  value={filters.limit}
                  onChange={(e) => setFilters({...filters, limit: parseInt(e.target.value)})}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                >
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4">
                <button
                  onClick={handleApplyFilters}
                  disabled={loading}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-all ${
                    loading
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700'
                  } text-white flex items-center justify-center gap-2`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
                      Loading...
                    </>
                  ) : (
                    <>
                      <Search size={16} />
                      Apply Filters
                    </>
                  )}
                </button>
                <button
                  onClick={handleResetFilters}
                  disabled={loading}
                  className={`w-full px-4 py-2 rounded-lg font-medium border transition-all ${
                    isDark
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - Results */}
          <div className="lg:col-span-3 space-y-4">
            {/* Search and Sort Bar */}
            <div className={`rounded-lg p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex-1 w-full sm:w-auto">
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                  <input
                    type="text"
                    placeholder="Search by symbol, name, or sector..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className={`px-3 py-2 rounded-lg border text-sm ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="score">FINSCAN Score</option>
                  <option value="market_cap">Market Cap</option>
                  <option value="price">Price</option>
                </select>

                <button
                  onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                  className={`px-3 py-2 rounded-lg border ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
                      : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {sortOrder === 'desc' ? <TrendingDown size={20} /> : <TrendingUp size={20} />}
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className={`px-4 py-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Found {filteredResults.length} stocks
            </div>

            {/* Results Table */}
            {loading ? (
              <div className={`rounded-lg p-12 text-center ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <Loader2 className={`mx-auto mb-4 animate-spin ${isDark ? 'text-gray-400' : 'text-gray-600'}`} size={48} />
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Loading stocks...
                </p>
              </div>
            ) : error ? (
              <div className={`rounded-lg p-12 text-center ${isDark ? 'bg-gray-800 text-red-400' : 'bg-white text-red-600'}`}>
                <p className="text-xl font-semibold mb-2">Error Loading Data</p>
                <p>{error}</p>
              </div>
            ) : filteredResults.length === 0 ? (
              <div className={`rounded-lg p-12 text-center ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}>
                <p className="text-xl font-semibold mb-2">No Results Found</p>
                <p>Try adjusting your filters or search term</p>
              </div>
            ) : (
              <div className={`rounded-lg overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className={isDark ? 'bg-gray-800' : 'bg-gray-100'}>
                      <tr>
                        <th className={`px-4 py-3 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Symbol
                        </th>
                        <th className={`px-4 py-3 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Name
                        </th>
                        <th className={`px-4 py-3 text-left text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Sector
                        </th>
                        <th className={`px-4 py-3 text-right text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Price
                        </th>
                        <th className={`px-4 py-3 text-right text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Market Cap
                        </th>
                        <th className={`px-4 py-3 text-center text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          FINSCAN Score
                        </th>
                        <th className={`px-4 py-3 text-right text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          P/E
                        </th>
                        <th className={`px-4 py-3 text-right text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Beta
                        </th>
                        <th className={`px-4 py-3 text-center text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className={isDark ? 'bg-gray-800' : 'bg-white'}>
                      {filteredResults.map((stock) => (
                        <tr
                          key={stock.symbol}
                          className={`border-t cursor-pointer transition-colors ${
                            isDark
                              ? 'border-gray-700 hover:bg-gray-750'
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                          onClick={() => router.push(`/research/${stock.symbol}`)}
                        >
                          <td className={`px-4 py-4 font-mono font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {stock.symbol}
                          </td>
                          <td className={`px-4 py-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {stock.name}
                          </td>
                          <td className={`px-4 py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {stock.sector || 'N/A'}
                          </td>
                          <td className={`px-4 py-4 text-right font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            ${stock.price?.toFixed(2) || 'N/A'}
                          </td>
                          <td className={`px-4 py-4 text-right text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {stock.market_cap ? formatMarketCap(stock.market_cap) : 'N/A'}
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center justify-center">
                              <span className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreBgColor(stock.finscan_score)} ${getScoreColor(stock.finscan_score)}`}>
                                {stock.finscan_score || 'N/A'}
                              </span>
                            </div>
                          </td>
                          <td className={`px-4 py-4 text-right text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {stock.pe?.toFixed(2) || 'N/A'}
                          </td>
                          <td className={`px-4 py-4 text-right text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {stock.beta?.toFixed(2) || 'N/A'}
                          </td>
                          <td className="px-4 py-4 text-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/research/${stock.symbol}`);
                              }}
                              className={`p-2 rounded-lg transition-colors ${
                                isDark
                                  ? 'hover:bg-gray-700 text-primary-400'
                                  : 'hover:bg-gray-100 text-primary-600'
                              }`}
                            >
                              <ArrowUpRight size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-8 p-4 rounded-lg text-center text-sm ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
          FINSCAN Intelligence Platform - Institutional-grade research
        </div>
      </div>
    </div>
  );
}
