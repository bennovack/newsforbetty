var sources = {
    'nyt': {
        'name': 'New York Times',
        'categories': {
            'world': {
                'name': 'World',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FInternationalHome.xml%22&format=json&callback="
            },
            'usa': {
                'name': 'U.S.',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FHomePage.xml%22&format=json&callback="
            },
            'local': {
                'name': 'Local',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FNYRegion.xml%22&format=json&callback="
            },
            'business': {
                'name': 'Business',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FBusiness.xml%22&format=json&callback="
            },
            'politics': {
                'name': 'Politics',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FPolitics.xml%22&format=json&callback="
            },
            'sports': {
                'name': 'Sports',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.nytimes.com%2Fservices%2Fxml%2Frss%2Fnyt%2FSports.xml%22&format=json&callback="
            }
        }
    },
    'wapo': {
        'name': 'Washington Post',
        'categories': {
            'world' : {
                'name': 'World',
                'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fworld%22&format=json&callback="
            },
            'usa' : {
                'name': "U.S.",
                'url' : "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fnational%22&format=json&callback="
            },
            'local' : {
                'name': 'Local',
                'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Flocal%22&format=json&callback="
            },
            'business': {
                'name': 'Business',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fbusiness%22&format=json&callback="
            },
            'politics': {
                'name': 'Politics',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fpolitics%22&format=json&callback="
            },
            'sports': {
                'name': 'Sports',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fsports%22&format=json&callback="
            },
            'entertainment': {
                'name': 'Entertainment',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Fentertainment%22&format=json&callback="
            },
            'lifestyle': {
                'name': 'Lifestyle',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.washingtonpost.com%2Frss%2Flifestyle%22&format=json&callback="
            }
        }
    },
    'phillydotcom': {
        'name': 'Philly.com',
        'url':"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.philly.com/philly_news.rss%22&format=json&callback="
    },
    'nationaljournal' : {
        'name': 'National Journal',
        'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Fwww.nationaljournal.com/%3frss%3D1%22&format=json&callback="
    },
    'BBC': {
        'name': 'BBC News',
        'categories': {
            'top': {
                'name': 'Top Stories',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml%22&format=json&diagnostics=true&callback="
            },
            'world': {
                'name': 'world',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fworld%2Frss.xml%22&format=json&diagnostics=true&callback="
            },
            'uk': {
                'name': 'UK',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fuk%2Frss.xml%22&format=json&diagnostics=true&callback="
            },
            'business': {
                'name': 'Business',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fbusiness%2Frss.xml%22&format=json&diagnostics=true&callback="
            },
            'politics': {
                'name': 'Politics',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fpolitics%2Frss.xml%22&format=json&diagnostics=true&callback="
            },
            'health': {
                'name': 'Health',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fhealth%2Frss.xml%22&format=json&diagnostics=true&callback="
            },
            'education': {
                'name': 'Education',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Feducation%2Frss.xml%22&format=json&diagnostics=true&callback=",
            },
            'science': {
                'name': 'Science and Environment',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fscience_and_environment%2Frss.xml%22&format=json&diagnostics=true&callback=",
            },
            'technology': {
                'name': 'Technology',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Ftechnology%2Frss.xml%22&format=json&diagnostics=true&callback=",
            },
            'entertainment': {
                'name': 'Entertainment and Arts',
                'url': "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D%22http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Fentertainment_and_arts%2Frss.xml%22&format=json&diagnostics=true&callback=",
            },
        }
    },
}
