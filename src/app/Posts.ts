export interface Posts {
    kind: string
    data: Data
  }
  
  export interface Data {
    after: string
    dist: number
    modhash: string
    geo_filter: any
    children: Children[]
    before: any
  }
  
  export interface Children {
    kind: string
    data: Data2
  }
  
  export interface Data2 {
    approved_at_utc: any
    subreddit: string
    selftext: string
    author_fullname: string
    saved: boolean
    mod_reason_title: any
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: LinkFlairRichtext[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height: number
    top_awarded_type?: string
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color: string
    upvote_ratio: number
    author_flair_background_color?: string
    subreddit_type: string
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed
    thumbnail_width: number
    author_flair_template_id: any
    is_original_content: boolean
    user_reports: any[]
    secure_media?: SecureMedia
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: SecureMediaEmbed
    link_flair_text?: string
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: string
    edited: any
    author_flair_css_class?: string
    author_flair_richtext: AuthorFlairRichtext[]
    gildings: Gildings
    post_hint?: string
    content_categories: any
    is_self: boolean
    mod_note: any
    created: number
    link_flair_type: string
    wls: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: string
    allow_live_comments: boolean
    selftext_html?: string
    likes: any
    suggested_sort?: string
    banned_at_utc: any
    url_overridden_by_dest?: string
    view_count: any
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    preview?: Preview
    all_awardings: AllAwarding[]
    awarders: any[]
    media_only: boolean
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text?: string
    treatment_tags: any[]
    visited: boolean
    removed_by: any
    num_reports: any
    distinguished?: string
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: any
    removal_reason: any
    link_flair_background_color: string
    id: string
    is_robot_indexable: boolean
    report_reasons: any
    author: string
    discussion_type: any
    num_comments: number
    send_replies: boolean
    whitelist_status: string
    contest_mode: boolean
    mod_reports: any[]
    author_patreon_flair: boolean
    author_flair_text_color?: string
    permalink: string
    parent_whitelist_status: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media?: Media
    is_video: boolean
    media_metadata?: MediaMetadata
    link_flair_template_id?: string
    crosspost_parent_list?: CrosspostParentList[]
    crosspost_parent?: string
    is_gallery?: boolean
    gallery_data?: GalleryData
  }
  
  export interface LinkFlairRichtext {
    a?: string
    e: string
    u?: string
    t?: string
  }
  
  export interface MediaEmbed {}
  
  export interface SecureMedia {
    reddit_video: RedditVideo
  }
  
  export interface RedditVideo {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface SecureMediaEmbed {}
  
  export interface AuthorFlairRichtext {
    e: string
    t: string
  }
  
  export interface Gildings {
    gid_1?: number
    gid_2?: number
  }
  
  export interface Preview {
    images: Image[]
    enabled: boolean
    reddit_video_preview?: RedditVideoPreview
  }
  
  export interface Image {
    source: Source
    resolutions: Resolution[]
    variants: Variants
    id: string
  }
  
  export interface Source {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution {
    url: string
    width: number
    height: number
  }
  
  export interface Variants {
    gif?: Gif
    mp4?: Mp4
  }
  
  export interface Gif {
    source: Source2
    resolutions: Resolution2[]
  }
  
  export interface Source2 {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution2 {
    url: string
    width: number
    height: number
  }
  
  export interface Mp4 {
    source: Source3
    resolutions: Resolution3[]
  }
  
  export interface Source3 {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution3 {
    url: string
    width: number
    height: number
  }
  
  export interface RedditVideoPreview {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface AllAwarding {
    giver_coin_reward: any
    subreddit_id: any
    is_new: boolean
    days_of_drip_extension: any
    coin_price: number
    id: string
    penny_donate: any
    award_sub_type: string
    coin_reward: number
    icon_url: string
    days_of_premium?: number
    tiers_by_required_awardings?: TiersByRequiredAwardings
    resized_icons: ResizedIcon5[]
    icon_width: number
    static_icon_width: number
    start_date: any
    is_enabled: boolean
    awardings_required_to_grant_benefits?: number
    description: string
    end_date: any
    subreddit_coin_reward: number
    count: number
    static_icon_height: number
    name: string
    resized_static_icons: ResizedStaticIcon5[]
    icon_format?: string
    icon_height: number
    penny_price?: number
    award_type: string
    static_icon_url: string
  }
  
  export interface TiersByRequiredAwardings {
    "0": N0
    "3": N3
    "6": N6
    "9": N9
  }
  
  export interface N0 {
    resized_icons: ResizedIcon[]
    awardings_required: number
    static_icon: StaticIcon
    resized_static_icons: ResizedStaticIcon[]
    icon: Icon
  }
  
  export interface ResizedIcon {
    url: string
    width: number
    height: number
  }
  
  export interface StaticIcon {
    url: string
    width: number
    format: any
    height: number
  }
  
  export interface ResizedStaticIcon {
    url: string
    width: number
    height: number
  }
  
  export interface Icon {
    url: string
    width: number
    format: string
    height: number
  }
  
  export interface N3 {
    resized_icons: ResizedIcon2[]
    awardings_required: number
    static_icon: StaticIcon2
    resized_static_icons: ResizedStaticIcon2[]
    icon: Icon2
  }
  
  export interface ResizedIcon2 {
    url: string
    width: number
    height: number
  }
  
  export interface StaticIcon2 {
    url: string
    width: number
    format: any
    height: number
  }
  
  export interface ResizedStaticIcon2 {
    url: string
    width: number
    height: number
  }
  
  export interface Icon2 {
    url: string
    width: number
    format: string
    height: number
  }
  
  export interface N6 {
    resized_icons: ResizedIcon3[]
    awardings_required: number
    static_icon: StaticIcon3
    resized_static_icons: ResizedStaticIcon3[]
    icon: Icon3
  }
  
  export interface ResizedIcon3 {
    url: string
    width: number
    height: number
  }
  
  export interface StaticIcon3 {
    url: string
    width: number
    format: any
    height: number
  }
  
  export interface ResizedStaticIcon3 {
    url: string
    width: number
    height: number
  }
  
  export interface Icon3 {
    url: string
    width: number
    format: string
    height: number
  }
  
  export interface N9 {
    resized_icons: ResizedIcon4[]
    awardings_required: number
    static_icon: StaticIcon4
    resized_static_icons: ResizedStaticIcon4[]
    icon: Icon4
  }
  
  export interface ResizedIcon4 {
    url: string
    width: number
    height: number
  }
  
  export interface StaticIcon4 {
    url: string
    width: number
    format: any
    height: number
  }
  
  export interface ResizedStaticIcon4 {
    url: string
    width: number
    height: number
  }
  
  export interface Icon4 {
    url: string
    width: number
    format: string
    height: number
  }
  
  export interface ResizedIcon5 {
    url: string
    width: number
    height: number
  }
  
  export interface ResizedStaticIcon5 {
    url: string
    width: number
    height: number
  }
  
  export interface Media {
    reddit_video: RedditVideo2
  }
  
  export interface RedditVideo2 {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface MediaMetadata {
    "261peeu80u291"?: N261peeu80u291
    "9gwfbima0u291"?: N9gwfbima0u291
    "8qne4bg50u291"?: N8qne4bg50u291
    zckhawzf0u291?: Zckhawzf0u291
    a913euispv091?: A913euispv091
    v8h7fat0bv091?: V8h7fat0bv091
    ttef2041bv091?: Ttef2041bv091
  }
  
  export interface N261peeu80u291 {
    status: string
    e: string
    m: string
    p: P[]
    s: S
    id: string
  }
  
  export interface P {
    y: number
    x: number
    u: string
  }
  
  export interface S {
    y: number
    x: number
    u: string
  }
  
  export interface N9gwfbima0u291 {
    status: string
    e: string
    m: string
    p: P2[]
    s: S2
    id: string
  }
  
  export interface P2 {
    y: number
    x: number
    u: string
  }
  
  export interface S2 {
    y: number
    x: number
    u: string
  }
  
  export interface N8qne4bg50u291 {
    status: string
    e: string
    m: string
    p: P3[]
    s: S3
    id: string
  }
  
  export interface P3 {
    y: number
    x: number
    u: string
  }
  
  export interface S3 {
    y: number
    x: number
    u: string
  }
  
  export interface Zckhawzf0u291 {
    status: string
    e: string
    m: string
    p: P4[]
    s: S4
    id: string
  }
  
  export interface P4 {
    y: number
    x: number
    u: string
  }
  
  export interface S4 {
    y: number
    x: number
    u: string
  }
  
  export interface A913euispv091 {
    status: string
    e: string
    m: string
    p: P5[]
    s: S5
    id: string
  }
  
  export interface P5 {
    y: number
    x: number
    u: string
  }
  
  export interface S5 {
    y: number
    x: number
    u: string
  }
  
  export interface V8h7fat0bv091 {
    status: string
    e: string
    m: string
    p: P6[]
    s: S6
    id: string
  }
  
  export interface P6 {
    y: number
    x: number
    u: string
  }
  
  export interface S6 {
    y: number
    x: number
    u: string
  }
  
  export interface Ttef2041bv091 {
    status: string
    e: string
    m: string
    p: P7[]
    s: S7
    id: string
  }
  
  export interface P7 {
    y: number
    x: number
    u: string
  }
  
  export interface S7 {
    y: number
    x: number
    u: string
  }
  
  export interface CrosspostParentList {
    approved_at_utc: any
    subreddit: string
    selftext: string
    author_fullname: string
    saved: boolean
    mod_reason_title: any
    gilded: number
    clicked: boolean
    title: string
    link_flair_richtext: any[]
    subreddit_name_prefixed: string
    hidden: boolean
    pwls: number
    link_flair_css_class?: string
    downs: number
    thumbnail_height: number
    top_awarded_type?: string
    hide_score: boolean
    name: string
    quarantine: boolean
    link_flair_text_color: string
    upvote_ratio: number
    author_flair_background_color?: string
    subreddit_type: string
    ups: number
    total_awards_received: number
    media_embed: MediaEmbed2
    thumbnail_width: number
    author_flair_template_id: any
    is_original_content: boolean
    user_reports: any[]
    secure_media?: SecureMedia2
    is_reddit_media_domain: boolean
    is_meta: boolean
    category: any
    secure_media_embed: SecureMediaEmbed2
    link_flair_text?: string
    can_mod_post: boolean
    score: number
    approved_by: any
    is_created_from_ads_ui: boolean
    author_premium: boolean
    thumbnail: string
    edited: boolean
    author_flair_css_class: any
    author_flair_richtext: any[]
    gildings: Gildings2
    post_hint: string
    content_categories: any
    is_self: boolean
    mod_note: any
    created: number
    link_flair_type: string
    wls: number
    removed_by_category: any
    banned_by: any
    author_flair_type: string
    domain: string
    allow_live_comments: boolean
    selftext_html: any
    likes: any
    suggested_sort?: string
    banned_at_utc: any
    url_overridden_by_dest: string
    view_count: any
    archived: boolean
    no_follow: boolean
    is_crosspostable: boolean
    pinned: boolean
    over_18: boolean
    preview: Preview2
    all_awardings: AllAwarding2[]
    awarders: any[]
    media_only: boolean
    can_gild: boolean
    spoiler: boolean
    locked: boolean
    author_flair_text?: string
    treatment_tags: any[]
    visited: boolean
    removed_by: any
    num_reports: any
    distinguished: any
    subreddit_id: string
    author_is_blocked: boolean
    mod_reason_by: any
    removal_reason: any
    link_flair_background_color: string
    id: string
    is_robot_indexable: boolean
    report_reasons: any
    author: string
    discussion_type: any
    num_comments: number
    send_replies: boolean
    whitelist_status: string
    contest_mode: boolean
    mod_reports: any[]
    author_patreon_flair: boolean
    author_flair_text_color?: string
    permalink: string
    parent_whitelist_status: string
    stickied: boolean
    url: string
    subreddit_subscribers: number
    created_utc: number
    num_crossposts: number
    media?: Media2
    is_video: boolean
    link_flair_template_id?: string
  }
  
  export interface MediaEmbed2 {}
  
  export interface SecureMedia2 {
    reddit_video: RedditVideo3
  }
  
  export interface RedditVideo3 {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface SecureMediaEmbed2 {}
  
  export interface Gildings2 {
    gid_1?: number
  }
  
  export interface Preview2 {
    images: Image2[]
    enabled: boolean
    reddit_video_preview?: RedditVideoPreview2
  }
  
  export interface Image2 {
    source: Source4
    resolutions: Resolution4[]
    variants: Variants2
    id: string
  }
  
  export interface Source4 {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution4 {
    url: string
    width: number
    height: number
  }
  
  export interface Variants2 {
    gif?: Gif2
    mp4?: Mp42
  }
  
  export interface Gif2 {
    source: Source5
    resolutions: Resolution5[]
  }
  
  export interface Source5 {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution5 {
    url: string
    width: number
    height: number
  }
  
  export interface Mp42 {
    source: Source6
    resolutions: Resolution6[]
  }
  
  export interface Source6 {
    url: string
    width: number
    height: number
  }
  
  export interface Resolution6 {
    url: string
    width: number
    height: number
  }
  
  export interface RedditVideoPreview2 {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface AllAwarding2 {
    giver_coin_reward: any
    subreddit_id: any
    is_new: boolean
    days_of_drip_extension: any
    coin_price: number
    id: string
    penny_donate: any
    award_sub_type: string
    coin_reward: number
    icon_url: string
    days_of_premium: any
    tiers_by_required_awardings: any
    resized_icons: ResizedIcon6[]
    icon_width: number
    static_icon_width: number
    start_date: any
    is_enabled: boolean
    awardings_required_to_grant_benefits: any
    description: string
    end_date: any
    subreddit_coin_reward: number
    count: number
    static_icon_height: number
    name: string
    resized_static_icons: ResizedStaticIcon6[]
    icon_format?: string
    icon_height: number
    penny_price: any
    award_type: string
    static_icon_url: string
  }
  
  export interface ResizedIcon6 {
    url: string
    width: number
    height: number
  }
  
  export interface ResizedStaticIcon6 {
    url: string
    width: number
    height: number
  }
  
  export interface Media2 {
    reddit_video: RedditVideo4
  }
  
  export interface RedditVideo4 {
    bitrate_kbps: number
    fallback_url: string
    height: number
    width: number
    scrubber_media_url: string
    dash_url: string
    duration: number
    hls_url: string
    is_gif: boolean
    transcoding_status: string
  }
  
  export interface GalleryData {
    items: Item[]
  }
  
  export interface Item {
    media_id: string
    id: number
  }
  