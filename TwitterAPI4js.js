var Twitter4JS = function (cbfunc, opts) {
    var self = this;

    var options = {
    //get and paste the api key,secret, accessToken,secret.
		count: 20,
		consumerKey: "NSqpVgtxLo9bt8JyYVSMjmVbj",
		consumerSecret: "zJH2PmAR0KlStIVjlhYYzKj2KJD1Ee631fRhdclAGslsFWjp2j",
		accessToken: "	348206999-IYnRXVssC6Rch8aLn3XaHol19Fetu2N5OG8S88D0",
		tokenSecret: "RQybt9cT5lk75TEPucGrswL1d7zsSyTaFf3p7HdXNLbaA"
    };

    this.statuses_public_timeline = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/public_timeline.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.home_timeline
    this.statuses_home_timeline = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.friends_timeline
    this.statuses_friends_timeline = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/friends_timeline.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.user_timeline
    this.statuses_user_timeline = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
		options.method = 'GET';

		self.getTwitter(cbfunc, opts);
    };
    //statuses.mentions
    this.statuses_mentions_timeline  = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.retweets_of_me
    this.statuses_retweets_of_me = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/retweets_of_me.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.retweeted_to_me
    this.statuses_retweeted_to_me = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/retweeted_to_me.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.show
    this.statuses_show = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/show/:id.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.update
    this.statuses_update = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/update.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.destroy
    this.statuses_destroy = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/destroy/:id.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.retweet
    this.statuses_retweet = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/retweet/:id.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.retweets
    this.statuses_retweets = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/retweets/:id.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.retweeted_by
    this.statuses_retweeted_by = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/:id/retweeted_by.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.retweeted_by_ids
    this.statuses_retweeted_by_ids = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/:id/retweeted_by/:ids.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };

    //users.show
    this.users_show = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/users/show.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //users.lookup
    this.users_lookup = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/users/lookup.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //users.search
    this.users_search = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/users/search.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //users.suggestions
    this.users_suggestions = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/users/suggestions.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //users.suggestions.twitter
    this.users_suggestions_twitter = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/users/suggestions/:slug.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //users.profile_image.twitter
    this.users_profile_image_twitter = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/users/profile_image/:screen_name.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };

//statuses.friends
    this.statuses_friends = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/friends.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //statuses.followers
    this.statuses_followers = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/statuses/followers.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //trends
    this.trends = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/trends.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };

//trends.current
    this.trends_current = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/trends/current.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //trends.daily
    this.trends_daily = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/trends/daily.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //trends.weekly
    this.trends_weekly = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/trends/weekly.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };

    //user/lists_create
    //Creates a new list for the authenticated user.
    this.user_lists_create = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/:user/lists.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    // :user/lists/:id
    // Updates the specified list.
    this.user_lists_update = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/:user/lists/:id.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    // :user/lists
    // List the lists of the specified user.
    this.user_lists_of_user = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/:user/lists.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    // :user/lists/:id
    // Show the specified list.
    this.user_lists_get = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/:user/lists/:id.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    // :user/lists/:id
    // Deletes the specified list
    this.user_lists_delete = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/:user/lists/:id.json';
		options.method = 'POST';
		options._method = 'DELETE';
		self.getTwitter(cbfunc, opts);
    };
    // :user/lists/:id/statuses
    // Show tweet timeline for members of the specified list.
    this.user_lists_statuses = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/:user/lists/:id/statuses.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    // :user/lists/memberships
    // List the lists the specified user has been added to.
    this.user_lists_memberships = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/:user/lists/memberships.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    // :user/lists/subscriptions
    // List the lists the specified user follows.
    this.user_lists_subscriptions = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/:user/lists/subscriptions.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };

    //direct_messages
    this.direct_messages = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/direct_messages.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //direct_messages.sent
    this.direct_messages_sent = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/direct_messages/sent.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //direct_messages.new
    this.direct_messages_new = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/direct_messages/new.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };

    //friendships.create
    this.friendships_create = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/friendships/create.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //friendships.destroy
    this.friendships_destroy = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/friendships/destroy/:id.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //friendships.exists
    this.friendships_exists = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/friendships/exists.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //friendships.show
    this.friendships_show = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/friendships/show.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //friendships.incoming
    this.friendships_incoming = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/friendships/incoming.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };

    //account/verify_credentials
    this.account_verify_credentials = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/account/verify_credentials.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //account.rate_limit_status
    this.account_rate_limit_status = function (options) {
		options.apiURL = 'https://api.twitter.com/1.1/account/rate_limit_status.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //account.end_session
    this.account_end_session = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/account/end_session.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //account.update_delivery_device
    this.account_update_delivery_device = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/account/update_delivery_device.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //account.update_profile_colors
    this.account_update_profile_colors = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/account/update_profile_colors.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //account.update_profile_image
    this.account_update_profile_image = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/account/update_profile_image.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //account.update_profile_background_image
    this.account_update_profile_background_image = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/account/update_profile_background_image.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };

    //favorites.create
    this.favorites = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/favorites.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //favorites.create
    this.favorites_create = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/favorites/create/:id.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //favorites.destroy
    this.favorites_destroy = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/favorites/destroy:id.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };

    //blocks.create
    this.blocks_create = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/blocks/create.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };

    //blocks.destroy
    this.blocks_destroy = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/blocks/destroy.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //blocks.exists
    this.blocks_exists = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/blocks/exists.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //blocks.blocking
    this.blocks_blocking = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/blocks/blocking.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //blocks.blocking_ids
    this.blocks_blocking_ids = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/blocks/blocking/:ids.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };

    // report_spam
    this.report_spam = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/report_spam.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };

    //saved_searches
    this.saved_searches = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/saved_searches.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //saved_searches.show
    this.saved_searches_show = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/saved_searches/show.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //saved_searches.create
    this.saved_searches_create = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/saved_searches/create.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };
    //saved_searches.delete
    this.saved_searches_delete = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/saved_searches/destroy.json';
		options.method = 'POST';
		self.getTwitter(cbfunc, opts);
    };

    //geo.search
    this.geo_search = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/geo/search.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //geo.similar_places
    this.geo_similar_places = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/geo/similar_places.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //geo.reverse_geocode
    this.geo_reverse_geocode = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/geo/reverse_geocode.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };
    //geo.id.place
    this.geo_id_place = function (cbfunc, opts) {
		options.apiURL = 'https://api.twitter.com/1.1/geo/id/:place_id.json';
		options.method = 'GET';
		self.getTwitter(cbfunc, opts);
    };

    this.getTwitter = function (cbfunc, opts) {
		var accessor = {
			consumerSecret: options.consumerSecret,
			tokenSecret: options.tokenSecret
		};

		var message = {
			method: options.method,
			action: options.apiURL,
			parameters: {
				count: options.count,
				oauth_version: "1.0",
				oauth_signature_method: "HMAC-SHA1",
				oauth_consumer_key: options.consumerKey,
				oauth_token: options.accessToken,
				callback: cbfunc
			}
		};

		//optional,necessary parameters processing
		for(var key in opts){
			message.parameters[key] = opts[key];
		}

		OAuth.setTimestampAndNonce(message);
		OAuth.SignatureMethod.sign(message, accessor);
		var url = OAuth.addToURL(message.action, message.parameters);
		$.ajax({
			type: message.method,
			url: url,
			dataType: "jsonp",
			jsonp: false,
			cache: true
		});
    };

};

function cbname(data) {
    console.log(JSON.stringify(data));
}

function html(data) {
	for(var i = 0;i < data.length;i++) {
		var test = document.getElementById('test1');
		var idNode = document.createTextNode('ID:@'+data[i].user.screen_name);
		var nameNode = document.createTextNode(data[i].user.name);
		var textNode = document.createTextNode(data[i].text);
		test.appendChild(idNode);
		test.appendChild(nameNode);
		test.appendChild(textNode);

	}
}

function htmljson(data) {
	var str = document.getElementById('test1');
	var node = document.createTextNode(JSON.stringify(data));
	str.appendChild(node);
}
