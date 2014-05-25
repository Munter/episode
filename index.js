module.exports = function (str) {
    var season,
        episode;

    var compactNotations = [
        /\bs(\d+) ?e(\d+)\b/i,
        /\b(\d+)x(\d+)\b/i
    ];

    var seasonNotations = [
        /\bs(\d+)\b/i,
        /\bseason[:_-]? ?(\d+)\b/i
    ];

    var episodeNotations = [
        /\be(\d+)\b/i,
        /\bepisode[:_-]? ?(\d+)\b/i
    ];

    compactNotations.some(function (regex) {
        var match = regex.exec(str);

        if (match) {
            season = parseInt(match[1], 10);
            episode = parseInt(match[2], 10);

            return true;
        }
    });

    if (!season) {
        seasonNotations.some(function (regex) {
            var match = regex.exec(str);

            if (match) {
                season = parseInt(match[1], 10);

                return true;
            }
        });
    }

    if (!episode) {
        episodeNotations.some(function (regex) {
            var match = regex.exec(str);

            if (match) {
                episode = parseInt(match[1], 10);

                return true;
            }
        });
    }

    return {
        season: season,
        episode: episode
    };
};
