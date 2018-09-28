exports.Helps = function() {
    var commands = this; // inner fn this will not be the same obj as in the outer

    commands.listOfReponses = {
        'help': {
            description: `returns help contents.`,
            title: ``,

        },

        'build': {
            description: `returns recommended twisted fate\'s build.`,
            title: ``,

        },

        'patch': {
            description: `returns the latest patch.`,
            title: ``,
        },

        'matchup': {
            // winrate, 
            description: `syntax: !matchup [champion\'s name] - returns a brief information of the matchup`,
            title: ``,
        },

        'runes': {
            description: `returns the current runepage of the latest patch.`,
            title: ``,
        },

        'clubs': {
            description: ``,
            title: ``,
        },

        'dopa': {
            description: `returns dopa\'s op.gg, stream, youtube channel.`,
            title: `Dopa/Apdo, God\'s Hands.`,
        },

        'grossgore': {
            description: `returns grossgore\'s op.gg, stream, youtube channel.`,
            title: `Gross Gore, self-proclaimed God.`,
        },

        'hax': {
            description: `return hax$\'s op.gg`,
            title: `SSBM Hax, Challenger Twisted Fate Main.`,
        },
    }

}