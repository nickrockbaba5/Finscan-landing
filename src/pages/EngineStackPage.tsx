import { Link } from 'react-router-dom'
import { Brain, Layers, Activity, LineChart, BarChart3, Zap, Globe, Shield, Target } from 'lucide-react'
import { SEO, PAGE_SEO, STRUCTURED_DATA } from '../components/SEO'

export default function EngineStackPage() {
  return (
    <>
      <SEO
        {...PAGE_SEO.engineStack}
        structuredData={STRUCTURED_DATA.breadcrumb([
          { name: 'Home', url: 'https://sniperiq.ai' },
          { name: 'Engine Stack', url: 'https://sniperiq.ai/engines' },
        ])}
      />

      <div className="min-h-screen bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm">
            <span className="text-xs">&larr;</span>
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black">SniperIQ Engine Stack</h1>
              <p className="text-sm text-gray-400 mt-1">
                ICT smart money, Market Profile, Dark Pool, Options Flow, Gamma, COT, Macro, Fusion Brain and India Institutional ML.
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-base md:text-lg mb-8">
            SniperIQ is built as a multi-engine research platform, not a single indicator. Behind the terminal is a full
            institutional engine stack that combines smart-money concepts, options &amp; gamma, dark pool data, macro, fundamentals and
            calibrated machine learning. All outputs are research and education only – SniperIQ does not execute trades or provide
            personalised investment advice.
          </p>

          {/* ICT + Market Structure */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <Layers className="w-5 h-5 text-emerald-400" />
              ICT Smart Money &amp; Market Structure
            </h2>
            <p className="text-gray-300 mb-3">
              The ICT Smart Money engine applies ICT-style concepts to global and Indian markets: liquidity pools, buy-side and
              sell-side liquidity, displacement moves, BOS / CHOCH, order blocks and premium / discount zones. It also tracks
              accumulation and distribution behaviour so you can see where so-called smart money has historically stepped in.
            </p>
            <p className="text-gray-300">
              A dedicated price action and market structure layer builds higher-high / higher-low maps, swing points, structural
              breaks and range vs trend regimes. This clean structure map feeds the playbook logic, institutional ML and the
              Fusion Brain meta-model.
            </p>
          </section>

          {/* Market Profile & Footprint */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              Market Profile (TPO), Volume Profile &amp; Footprint
            </h2>
            <p className="text-gray-300 mb-3">
              The Market Profile / TPO engine builds full session profiles – Value Area, POC, single prints, poor highs/lows and
              auction imbalance. It tracks migration of value over time (D-shape, P-shape, b-shape, trend days, neutral days) so
              you can understand where the market is accepting or rejecting price.
            </p>
            <p className="text-gray-300">
              A separate volume profile and footprint engine then analyses per-price and per-bar volume, delta and sweep/absorption
              patterns. It highlights sweeps, exhaustion and unusually aggressive flow around key levels, exposing where volume
              actually traded rather than just OHLC candles.
            </p>
          </section>

          {/* Volatility, Gamma, Options, COT */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-emerald-400" />
              Volatility, Gamma Exposure, Options Flow &amp; COT
            </h2>
            <p className="text-gray-300 mb-3">
              The technical volatility engine classifies volatility regimes (compressed, normal, expanded, chaotic) using ATR,
              realized volatility and range compression/expansion. This feeds directly into risk models for stop-loss and target
              sizing so that levels adapt to the current volatility regime.
            </p>
            <p className="text-gray-300 mb-3">
              The gamma exposure engine estimates dealer gamma exposure around current price: gamma flip zones, high-gamma bands
              and whether the options market is likely to pin price or accelerate moves. An options flow engine monitors unusual
              options activity, skew and IV percentile/rank, highlighting large directional trades that confirm or contradict the
              core bias.
            </p>
            <p className="text-gray-300">
              For futures and indices, a COT positioning engine ingests Commitment of Traders data and synthetic positioning
              metrics, tracking net positioning of commercials, non-commercials and small traders. It flags crowded trades, risk-on
              vs risk-off shifts and positioning exhaustion.
            </p>
          </section>

          {/* Macro / Intermarket / Sector / ETF */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-emerald-400" />
              Macro, Intermarket, Sector Rotation &amp; ETF Flow
            </h2>
            <p className="text-gray-300 mb-3">
              A macro fundamentals engine aggregates growth, inflation, policy and economic surprise indicators into a coherent
              macro regime. It distinguishes inflation-dominant, growth-dominant, stagflation and other environments so you can see
              whether an asset&apos;s behaviour is macro-consistent.
            </p>
            <p className="text-gray-300 mb-3">
              The intermarket engine analyses cross-asset relationships between indices, bonds, commodities, FX and sector ETFs to
              generate risk-on / risk-off signals. A sector rotation engine tracks sector momentum and breadth to show where
              institutional capital is rotating inside the equity market.
            </p>
            <p className="text-gray-300">
              ETF flow and factor model engines track flows in key ETFs (SPY, QQQ, GLD, sector ETFs) and exposures to classic
              factors like market beta, value, momentum, quality and low volatility. This tells you how much of a stock&apos;s move is
              factor-driven vs idiosyncratic.
            </p>
          </section>

          {/* Dark Pool, Seasonality, Sentiment */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-emerald-400" />
              Dark Pool, Seasonality, News &amp; Social Sentiment
            </h2>
            <p className="text-gray-300 mb-3">
              A dark pool and short interest engine monitors off-exchange activity, short interest and related metrics where data
              is available, highlighting abnormal accumulation/distribution and short-squeeze risk.
            </p>
            <p className="text-gray-300 mb-3">
              Seasonality and calendar engines capture month-of-year, day-of-week and event/holiday patterns that affect indices,
              commodities and key stocks. They are used as context – never as a stand-alone trading rule.
            </p>
            <p className="text-gray-300">
              News impact and text sentiment engines use AI to score the importance and polarity of news flow and aggregated social
              sentiment. They produce a combined sentiment index that is used as a cross-check rather than a primary driver.
            </p>
          </section>

          {/* Fusion Brain */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-emerald-400" />
              Fusion Brain – 21-Engine Meta-Model
            </h2>
            <p className="text-gray-300 mb-3">
              Fusion Brain V3 is the meta-model that fuses all 21 engines into a single, interpretable institutional signal. Tier 1
              and 2 engines (ICT, technical, TPO, volume, gamma, COT, options flow, dark pool) determine direction; Tier 3 and 4
              engines (macro, intermarket, sector, event risk, sentiment, seasonality) only cap or boost conviction and never
              randomly flip the call.
            </p>
            <p className="text-gray-300">
              The global institutional endpoint <code className="bg-gray-900 px-1 rounded">/api/institutional-signal/{"{symbol}"}</code> uses multi-timeframe
              data plus all 21 engines and Fusion Brain. It returns direction (bullish / bearish / neutral / no-call), confidence
              percentage, key levels (entry zone, stop-loss, targets) and a full evidence trail for compliance and audit.
            </p>
          </section>

          {/* India engines */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <LineChart className="w-5 h-5 text-emerald-400" />
              India Institutional ML &amp; Retail Engines
            </h2>
            <p className="text-gray-300 mb-3">
              For NSE and MCX markets, SniperIQ includes a dedicated India Institutional ML engine with 120+ features across price
              action, volatility, volume, index context, options chain, seasonality, cross-asset and commodity structures. A
              regime-aware ensemble of XGBoost, LightGBM, CatBoost and Random Forest models is trained with walk-forward
              validation and calibrated probabilities.
            </p>
            <p className="text-gray-300 mb-3">
              The engine generates horizon-specific institutional research for symbols like NIFTY, BANKNIFTY, FINNIFTY and key MCX
              contracts, providing signal classification, entry, stop, multiple targets and Kelly-style position sizing. For India
              retail, a separate 3-engine stack (structure, volatility range, participation / OI) produces quality-gated retail
              outputs.
            </p>
            <p className="text-gray-300">
              Historical backtesting for India Institutional ML runs the real ML model on historical OHLCV data without look-ahead,
              and live/paper performance is tracked via SignalTracker with win rate, Sharpe ratio, profit factor, drawdown and
              expectancy metrics.
            </p>
          </section>

          {/* Overmind / Copilot / Compliance */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-emerald-400" />
              Overmind, AI Copilot &amp; Compliance Layer
            </h2>
            <p className="text-gray-300 mb-3">
              Research APIs under <code className="bg-gray-900 px-1 rounded">/api/research/*</code> combine engines, fundamentals and text into a single
              research JSON. Overmind intelligence (<code className="bg-gray-900 px-1 rounded">/api/overmind/*</code>) interprets engine outputs and
              generates institutional-style narrative notes, while AI Copilot endpoints (<code className="bg-gray-900 px-1 rounded">/api/chat</code>,{' '}
              <code className="bg-gray-900 px-1 rounded">/api/copilot</code>) use GPT-class models wrapped with SniperIQ context and compliance filters.
            </p>
            <p className="text-gray-300">
              Every institutional research call is logged in PostgreSQL as a <code className="bg-gray-900 px-1 rounded">ResearchEvent</code> with raw response
              hash, displayed payload hash, client context, disclaimer flags and optional linked trades. SignalTracker and
              backtesting modules provide a full paper/live performance record per model type, making the entire engine stack
              auditable from research call to outcome.
            </p>
          </section>

          <div className="mt-10 border-t border-gray-800 pt-6 text-xs text-gray-500">
            SniperIQ is a research and market-intelligence platform only. It does not execute trades, hold client funds or provide
            personalised investment advice. All outputs are for informational and educational purposes. Users remain fully
            responsible for their own decisions.
          </div>
        </div>
      </div>
    </>
  )
}

