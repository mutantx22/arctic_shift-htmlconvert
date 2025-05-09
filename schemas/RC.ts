interface RedditComment {
	_meta?: {
		corrupted_body?: string,
		is_edited?: boolean,
		note?: "no_2nd_retrieval"|"initially_unavailable",
		removal_type?: "deleted"|"removed"|"removed by reddit",
		retrieved_2nd_on?: number,
		was_deleted_later?: boolean,
		was_initially_deleted?: boolean,
	},
	all_awardings?: {
		award_sub_type?: "GLOBAL"|"MODERATOR"|"COMMUNITY"|"APPRECIATION"|"PREMIUM"|"GROUP"|"CHAT_REACTION",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits?: null|number,
		coin_price: number,
		coin_reward: number,
		count: number,
		days_of_drip_extension: number|null,
		days_of_premium: number|null,
		description: string|null,
		end_date?: null|number,
		giver_coin_reward?: null|number,
		icon_format?: null|"PNG"|"APNG"|"JPG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new?: boolean,
		name: string|null,
		penny_donate?: null|number,
		penny_price?: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons?: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date?: null|number,
		static_icon_height?: number,
		static_icon_url?: string,
		static_icon_width?: number,
		sticky_duration_seconds?: null,
		subreddit_coin_reward?: number,
		subreddit_id: null|string,
		tiers_by_required_awardings?: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "PNG"|"APNG",
					height: number,
					url: string,
					width: number,
				},
				resized_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				resized_static_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				static_icon: {
					format: null,
					height: number,
					url: string,
					width: number,
				},
			},
		},
	}[],
	approved?: boolean,
	approved_at_utc?: null,
	approved_by?: null,
	archived?: boolean,
	associated_award?: null|{
		award_sub_type: "GLOBAL"|"COMMUNITY"|"APPRECIATION"|"PREMIUM"|"MODERATOR"|"GROUP",
		award_type: "global"|"community"|"moderator",
		awardings_required_to_grant_benefits?: null|number,
		coin_price: number,
		coin_reward: number|null,
		count?: number,
		days_of_drip_extension: number|null,
		days_of_premium: number|null,
		description: string,
		end_date: null,
		giver_coin_reward?: null|number,
		icon_format?: null|"PNG"|"APNG",
		icon_height: number,
		icon_url: string,
		icon_width: number,
		id: string,
		is_enabled: boolean,
		is_new: boolean,
		name: string,
		penny_donate?: null|number,
		penny_price?: null|number,
		resized_icons: {
			height: number,
			url: string,
			width: number,
		}[],
		resized_static_icons?: {
			height: number,
			url: string,
			width: number,
		}[],
		start_date: null|number,
		static_icon_height?: number,
		static_icon_url?: string,
		static_icon_width?: number,
		sticky_duration_seconds?: null,
		subreddit_coin_reward: number,
		subreddit_id: null|string,
		tiers_by_required_awardings?: null|{
			[key: string]: {
				awardings_required: number,
				icon: {
					format: "PNG"|"APNG",
					height: number,
					url: string,
					width: number,
				},
				resized_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				resized_static_icons: {
					height: number,
					url: string,
					width: number,
				}[],
				static_icon: {
					format: null,
					height: number,
					url: string,
					width: number,
				},
			},
		},
	},
	author: string,
	author_cakeday?: boolean,
	author_created_utc?: number|null,
	author_flair_background_color?: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string,
		e: "text"|"emoji",
		t?: string,
		u?: string,
	}[],
	author_flair_template_id?: null|string,
	author_flair_text: null|string,
	author_flair_text_color?: null|"dark"|"light"|"",
	author_flair_type?: "text"|"richtext",
	author_fullname?: string|null,
	author_is_blocked?: boolean,
	author_patreon_flair?: boolean,
	author_premium?: boolean,
	awarders?: string[],
	banned_at_utc?: null,
	banned_by?: null,
	body: string,
	body_html?: string|null,
	can_gild?: boolean,
	can_mod_post?: boolean,
	collapsed?: boolean,
	collapsed_because_crowd_control?: null,
	collapsed_reason?: null|"comment score below threshold"|"potentially toxic"|"may be sensitive content"|"potentially toxic content",
	collapsed_reason_code?: null|"DELETED"|"LOW_SCORE"|"POTENTIALLY_TOXIC",
	comment_type?: null|"PREDICTION",
	controversiality: number,
	created?: number|null,
	created_utc: number|string,
	distinguished: null|"moderator"|"admin"|"special",
	downs?: number,
	editable?: boolean,
	edited: boolean|number,
	expression_asset_data?: {
		[key: string]: {
			avatar: {
				e: "Image",
				m: "image/png",
				s: {
					u: string,
					x: number,
					y: number,
				},
			},
			expression: {
				e: " Image",
				l: "FRONT"|"BACK",
				m: "image/png",
				n: "fire"|"heart"|"cry"|"winner"|"bravo"|"starstruck"|"holo_card"|"laugh"|"dizziness"|"clown"|"take_my_energy"|"nani"|"webman"|"spooky"|"cameras",
				s: {
					u: string,
					x: number,
					y: number,
				},
			}[],
			perspective: "FULL_BODY"|"CROPPED",
			position: "CENTER"|"LEFT",
			size: "SIZE_1_X_2"|"SIZE_1_X_1",
		},
	},
	gilded: number,
	gildings?: {
		gid_1?: number,
		gid_2?: number,
		gid_3?: number,
	},
	id: string,
	ignore_reports?: boolean,
	is_submitter?: boolean,
	likes?: null|boolean,
	link_id: string,
	locked?: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "AnimatedImage"|"Image",
			ext?: string,
			id?: string,
			m?: "image/gif"|"image/png"|"image/jpeg",
			p?: {
				u: string,
				x: number,
				y: number,
			}[],
			s?: {
				gif?: string,
				mp4?: string,
				u?: string,
				x: number,
				y: number,
			},
			status: "valid"|"unprocessed"|"invalid",
			t?: "sticker"|"emoji"|"giphy",
		},
	},
	mod_note?: null,
	mod_reason_by?: null,
	mod_reason_title?: null,
	mod_reports?: []|null,
	name?: string,
	no_follow?: boolean,
	num_reports?: null|number,
	parent_id: string,
	permalink?: string,
	permalink_url?: string,
	quarantined?: boolean,
	removal_reason?: null|"legal",
	removed?: boolean,
	replies?: ""|null,
	report_reasons?: null|[],
	retrieved_on?: number|null,
	retrieved_utc?: number,
	rte_mode?: "markdown"|"richtext",
	saved?: boolean|null,
	score: number|null,
	score_hidden?: boolean,
	send_replies?: boolean,
	spam?: boolean,
	steward_reports?: [],
	stickied?: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed?: string,
	subreddit_type?: "public"|"restricted"|"user"|"archived"|"private"|"gold_restricted",
	top_awarded_type?: null,
	total_awards_received?: number,
	treatment_tags?: string[],
	unrepliable_reason?: null|"NEAR_BLOCKER",
	ups?: number,
	user_reports?: []|null,
}
