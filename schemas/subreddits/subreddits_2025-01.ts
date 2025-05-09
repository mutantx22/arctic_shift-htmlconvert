interface Subreddit {
	_meta: {
		earliest_comment_at: null|number,
		earliest_post_at: number|null,
		num_comments: null|number,
		num_comments_updated_at: null|number,
		num_posts: number|null,
		num_posts_updated_at: number|null,
	},
	accept_followers: boolean|null,
	accounts_active: null,
	accounts_active_is_fuzzed: boolean|null,
	active_user_count: null,
	advertiser_category: ""|"Lifestyles"|"Sports"|"Technology"|"Games"|"Automotive"|"Entertainment"|"College / University"|"Local"|"Health"|"Business / Finance"|"Family & Youth"|"Retail"|"Travel"|null,
	all_original_content: boolean|null,
	allow_discovery: boolean|null,
	allow_galleries: boolean|null,
	allow_images: boolean|null,
	allow_polls: boolean|null,
	allow_prediction_contributors: boolean,
	allow_predictions: boolean,
	allow_predictions_tournament: boolean,
	allow_talks: boolean,
	allow_videogifs: boolean,
	allow_videos: boolean,
	allowed_media_in_comments: ("giphy"|"static"|"animated"|"expression"|"video")[],
	banner_background_color: string|null,
	banner_background_image: string,
	banner_img: string|null,
	banner_size: null|number[],
	can_assign_link_flair: boolean,
	can_assign_user_flair: boolean,
	collapse_deleted_comments: boolean|null,
	comment_contribution_settings: {
		allowed_media_types?: null|("giphy"|"static"|"animated"|"expression"|"video")[], // 9837307/21865531 (44.99%)
	},
	comment_score_hide_mins: number|null,
	community_icon: string,
	community_reviewed: boolean|null,
	content_category?: "photography"|"gaming"|"drawing_and_painting"|"entertainment"|"videos"|"animals"|"food"|"music"|"memes"|"diy_and_crafts"|"funny"|"writing", // 61/21865531 (0.00%)
	created: number,
	created_utc: number,
	description: string|null,
	disable_contributor_requests: boolean|null,
	display_name: string,
	display_name_prefixed: string,
	emojis_custom_size: null|number[],
	emojis_enabled: boolean,
	free_form_reports: boolean|null,
	has_menu_widget: boolean,
	header_img: null|string,
	header_size: null|number[],
	header_title: string|null,
	hide_ads: boolean|null,
	icon_img: string|null,
	icon_size: number[]|null,
	id: string,
	interstitial_warning_message?: string, // 98/21865531 (0.00%)
	is_crosspostable_subreddit: boolean|null,
	is_default_banner?: boolean, // 16982966/21865531 (77.67%)
	is_default_icon?: boolean[], // 16982966/21865531 (77.67%)
	is_enrolled_in_new_modmail: null,
	key_color: string|null,
	lang: string|null,
	link_flair_enabled: boolean|null,
	link_flair_position: ""|"right"|"left"|null,
	mobile_banner_image: string|null,
	name: string,
	notification_level: null,
	original_content_tag_enabled: boolean|null,
	over18: boolean|null,
	prediction_leaderboard_entry_type: number|null,
	primary_color: string|null,
	public_description: string,
	public_traffic: boolean|null,
	quarantine: boolean|null,
	quarantine_message?: string, // 379/21865531 (0.00%)
	quarantine_message_html?: string, // 379/21865531 (0.00%)
	quarantine_permissions?: {
		crossposts: boolean,
		galleries: boolean,
		images: boolean,
		media: boolean,
		polls: boolean,
		sharing: boolean,
		sr_images: boolean,
		styles: boolean,
		subscriber_count: boolean,
		videos: boolean,
	}, // 379/21865531 (0.00%)
	restrict_commenting: boolean|null,
	restrict_posting: boolean|null,
	retrieved_on: number,
	should_archive_posts: boolean|null,
	should_show_media_in_comments_setting: boolean,
	show_media: boolean|null,
	show_media_preview: boolean|null,
	spoilers_enabled: boolean|null,
	submission_type: "any"|"self"|"link"|null,
	submit_link_label: string|null,
	submit_text: string|null,
	submit_text_html: null|string,
	submit_text_label: string|null,
	subreddit_type: "user"|"public"|"restricted"|"private"|"employees_only"|"archived"|"gold_only",
	subscribers: number|null,
	suggested_comment_sort: "qa"|"new"|"confidence"|"top"|"blank"|"old"|"controversial"|"live"|"random"|null,
	title: string,
	url: string,
	user_can_flair_in_sr: null,
	user_flair_background_color: null,
	user_flair_css_class: null,
	user_flair_enabled_in_sr: boolean|null,
	user_flair_position: "right"|"left"|""|null,
	user_flair_richtext: [],
	user_flair_template_id: null,
	user_flair_text: null,
	user_flair_text_color: null,
	user_flair_type: "text"|"richtext",
	user_has_favorited: boolean|null,
	user_is_banned: boolean|null,
	user_is_contributor: boolean|null,
	user_is_moderator: boolean|null,
	user_is_muted: boolean|null,
	user_is_subscriber: boolean|null,
	user_sr_flair_enabled: null,
	user_sr_theme_enabled: boolean|null,
	videostream_links_count?: number, // 15968818/21865531 (73.03%)
	whitelist_status?: null, // 41/21865531 (0.00%)
	wiki_enabled: null|boolean,
	wls: null|number,
}