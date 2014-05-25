var ep = require('../index'),
    expect = require('unexpected');

describe('episode', function () {
    var firstEpisode = {
        season: 1,
        episode: 1
    };

    it('Should understand the S{number}E{number} syntax', function (done) {
        expect(ep('s01e01'), 'to equal', firstEpisode);
        expect(ep('s1e01'), 'to equal', firstEpisode);
        expect(ep('s01e1'), 'to equal', firstEpisode);

        expect(ep('S01E01'), 'to equal', firstEpisode);
        expect(ep('S1E01'), 'to equal', firstEpisode);
        expect(ep('S01E1'), 'to equal', firstEpisode);

        expect(ep('s01 e01'), 'to equal', firstEpisode);
        expect(ep('S01 E01'), 'to equal', firstEpisode);

        expect(ep('foo bar s1e1.720p.mp4'), 'to equal', firstEpisode);

        expect(ep('season 1 foo bar boo baz'), 'not to equal', firstEpisode);

        done();
    });

    it('Should understand the {number}x{number} syntax', function (done) {
        expect(ep('01x01'), 'to equal', firstEpisode);
        expect(ep('1x01'), 'to equal', firstEpisode);
        expect(ep('01x1'), 'to equal', firstEpisode);
        expect(ep('1x1'), 'to equal', firstEpisode);

        expect(ep('01X01'), 'to equal', firstEpisode);
        expect(ep('1X01'), 'to equal', firstEpisode);
        expect(ep('01X1'), 'to equal', firstEpisode);
        expect(ep('1X1'), 'to equal', firstEpisode);

        expect(ep('foo bar 01x01.720p.mp4'), 'to equal', firstEpisode);

        expect(ep('season 1 foo bar boo baz'), 'not to equal', firstEpisode);

        done();
    });

    it('Should understand the season syntax', function (done) {
        var season = {
            season: 1,
            episode: undefined
        };

        expect(ep('season 1'), 'to equal', season);
        expect(ep('  season 1'), 'to equal', season);
        expect(ep('season 1  '), 'to equal', season);
        expect(ep('season1'), 'to equal', season);
        expect(ep('SEASON 1'), 'to equal', season);

        expect(ep('season:1'), 'to equal', season);
        expect(ep('season-1'), 'to equal', season);
        expect(ep('season_1'), 'to equal', season);

        expect(ep('season: 1'), 'to equal', season);
        expect(ep('season- 1'), 'to equal', season);
        expect(ep('season_ 1'), 'to equal', season);

        expect(ep('season: 1'), 'to equal', season);
        expect(ep('season- 1'), 'to equal', season);
        expect(ep('season_ 1'), 'to equal', season);

        done();
    });

    it('Should understand the episode syntax', function (done) {
        var episode = {
            season: undefined,
            episode: 1
        };

        expect(ep('episode 1'), 'to equal', episode);
        expect(ep('  episode 1'), 'to equal', episode);
        expect(ep('episode 1  '), 'to equal', episode);
        expect(ep('episode1'), 'to equal', episode);
        expect(ep('episode 1'), 'to equal', episode);

        expect(ep('episode:1'), 'to equal', episode);
        expect(ep('episode-1'), 'to equal', episode);
        expect(ep('episode_1'), 'to equal', episode);

        expect(ep('episode: 1'), 'to equal', episode);
        expect(ep('episode- 1'), 'to equal', episode);
        expect(ep('episode_ 1'), 'to equal', episode);

        expect(ep('episode: 1'), 'to equal', episode);
        expect(ep('episode- 1'), 'to equal', episode);
        expect(ep('episode_ 1'), 'to equal', episode);

        done();
    });
});
