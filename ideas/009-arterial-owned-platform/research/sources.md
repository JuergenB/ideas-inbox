# Sources & References — Idea 009: Arterial Owned Platform / GetArtNow

This is primarily a **vision/strategy deck**, which is largely exempt from sourcing. Per the project's "hybrid" sourcing choice, this file backs the few **external** claims the deck makes. Internal claims (our dataset size, our tool stack, our pipeline) are first-party and not cited here.

Order matches the deck's Sources slide.

---

## The "salon hang" — dense, floor-to-ceiling display has an art-historical pedigree

- **Claim in deck:** GetArtNow's dense art wall revives the "salon hang," which originated at the Paris Salon (1667, the Louvre's Salon Carré); the "Petersburg hang" is named for the Hermitage.
- **Sources:**
  - National Gallery of Canada — "The Tradition of the Salon" — https://www.gallery.ca/salon-hanging/
  - Fine Arts Museums of San Francisco — "Floor to Ceiling" (salon style) — https://insights.famsf.org/salon-style/
  - M.S. Rau — "The Paris Salon: How It Shaped the Art World — and Your Gallery Wall" — https://rauantiques.com/blogs/canvases-carats-and-curiosities/the-paris-salon-how-it-shaped-the-art-world-and-your-gallery-wall
- **Retrieved:** 2026-06-08 via web search.
- **Quote (NGC / FAMSF synthesis):** "The crowded, floor-to-ceiling arrangement known as the 'salon-style hang'" took its name from the room where the Académie's annual exhibitions were held; the "Petersburger" style takes its name from the Hermitage in St. Petersburg.
- **Used in deck:** slide 6 (GetArtNow art wall).

## Art-market value is consolidating around owned platforms + proprietary data

- **Claim in deck:** The art world's own value is consolidating around owned platforms plus proprietary data. In 2025 Beowolff Capital acquired Artnet (~$73.7M) and merged it with Artsy into a single data-and-AI ecosystem.
- **Sources:**
  - Artnet News — "Artnet to Go Private With Beowolff Capital in $73.7 Million Deal" — https://news.artnet.com/market/beowolff-capital-artnet-takeover-2649474
  - ARTnews — "Artsy and Artnet Join Forces Under Beowolff Capital in Art Market Merger" — https://www.artnews.com/art-news/news/artsy-artnet-merger-beowolff-art-market-1234781320/
  - The Art Newspaper — "European-American investment company to buy Artnet and take it private" (2025-05-27) — https://www.theartnewspaper.com/2025/05/27/european-american-investment-company-to-buy-artnet-and-take-it-private
- **Retrieved:** 2026-06-08 via web search.
- **Detail:** Beowolff Capital (CEO Andrew Wolff) secured ~65% of Artnet's shares (deal valued ~€65M / ~$73.7M), planned to delist it from the Frankfurt Stock Exchange, and already held a majority stake in Artsy. The two are run under one leadership (Jeffrey Yin as CEO, Wolff as chairman), combining "underlying infrastructure and data" while operating as separate brands.
- **Used in deck:** slide 5 (own the core → mature institution / asset).
- **Note:** This is corroborating market context for the "platform + data is the asset" framing — also cited in idea 001's research.

## The rented gallery layer offers one rigid exhibition format

- **Claim in deck:** Artwork Archive's exhibition display has a single rigid format with no adjustable parameters (dimensions on/off, sliders, animated storytelling) — the limitation the owned platform removes.
- **Source:** Artwork Archive public product / exhibition feature documentation (artworkarchive.com). First-party experience from the Arterial team's production use via the `artwork-archive` Rolling Submissions repo.
- **Status:** Partly an internal/operational observation (we use the product); the limitation is verifiable against AA's published exhibition feature set. Last verified against team usage: 2026-06.
- **Used in deck:** slides 3, 6, 7.

## Vector-embedding visual similarity is the technique behind the art wall

- **Claim in deck:** The art wall's "recompose around this piece" navigation is powered by vector-embedding similarity — the same approach Polymash already runs in production in the Intersect curator.
- **Source:** First-party — the Intersect curator uses OpenAI embeddings + Pinecone for taste/similarity in production (see `the-intersect-curator/lib/pinecone/`). Vector similarity search for images/text is an established, widely-documented technique.
- **Status:** First-party + general industry technique; no single external citation required.
- **Used in deck:** slides 6, 12.

---

*Compiled 2026-06-08. The deck is a vision/discussion paper for internal alignment; most of its content is strategy and opinion, which the project's sourcing rule treats as exempt. Only the genuinely external claims above are cited.*
