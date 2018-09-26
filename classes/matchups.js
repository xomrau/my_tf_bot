exports.Matchups = function() {
    var matchup = this;

    const rune = ['Grasp', 'Comet'];
    
    /*
    
    
    
    
    
    
    
    */ 


    matchup.listOfChamps = {
        'ahri': {
            difficult: 'Medium/Hard',
            win_rate: '', //prolly get it from op.gg
            starting_items: '',
            rune: rune[1],
            sum_spells: 'Flash + Ignite/Cleanse',
            brief: '-- Don\'t stay in lane while chunked, Ahri can cover immense amounts of ground.\n-- Due to Ignite+Electrocute, her kill pressure post-6 has become quite high.\n-- She becomes squishy later in the game, and you outscale.'
            
        },

        'akali': {
            difficult: 'Easy-Hard (depending on Akali\'s skill)',
            win_rate: '',
            starting_items: '',
            rune: rune[2],
            sum_spells: 'Flash + Exhaust',
            brief: '-- The difference between a good and bad Akali is night and day.\n-- Stay back, respect her damage, treat her like a Fizz.\n-- Your ult reveals her but she is still untargetable in the shroud.\n-- Take Grasp and pressure her early game.\n-- Exhaust is good, since her burst takes some time.',

        },

        'anivia': {
            difficult: 'Easy',
            win_rate: '',
            starting_items: '',
            rune: rune[1],
            sum_spells: 'Flash + Ignite',
            brief: '',

        },

        'annie': {
            difficult: 'Easy',
            win_rate: '',
            starting_items: '',
            rune: rune[1],
            sum_spells: '',
            brief: '-- Know her damage at all times.\n-- She is a very flash reliant champion.\n-- Her waveclear is not great, but she can CS relatively well under tower.\n-- Get MR if she targets you with her flash combo.',
        
        },

        'aurelion': {
            difficult: 'Hard',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: 'Flash+Ghost/Ignite',
            brief: '-- If you stay in his melee range, he can\'t hit you with anything except AAs and R.\n-- He pushes hard early.\n-- Don\'t try to fight him between corrupting pot, minion advantage, and superfast backs, he has all the tools needed to beat TF early.\n-- He can sort of match your roams but is slower.\n-- If you stun him at the right time, he\'ll miss his Q and his passive damage will decrease dramatically.',

        },
        'aurelionsol': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },
        'asol': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'azir': {
            difficult: 'Easy',
            win_rate: '',
            starting_items: '',
            rune: rune[1],
            sum_spells: 'Flash + Ignite',
            brief: '',

        },

        'brand': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'cass': {
            difficult: 'Easy',
            win_rate: '',
            starting_items: 'Boots + pots',
            rune: rune[1],
            sum_spells: 'Flash + Ignite/Exhaust/Cleanse',
            brief: '-- Dodge her Q and R.\n-- She has a strong level 1 cheese, be wary.\n-- If she can hit her Q+R, her damage is high.\n-- Her waveclear is bad, but you can only really abuse this post-6.\n-- She outscales you after midgame.',

        },
        'cassiopeia': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'corki': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'diana': {
            difficult: 'Medium',
            win_rate: '',
            starting_items: '',
            rune: rune[2],
            sum_spells: 'Flash + Exhaust',
            brief: '-- Dodge as much of her Q as possible.\n-- She has better resistance to poke than most melee champs, and a surprisingly strong all-in post-6.\n-- Be careful, her engage range is long. However, she doesn\'t have an escape after engaging nor a way to avoid getting stunned.\n-- Save a stun/exhaust for her if she commits.',

        },

        'ekko': {
            difficult: 'Medium',
            win_rate: '',
            starting_items: '',
            rune: 'Grasp',
            sum_spells: 'Flash + Cleanse/Heal/Ignite',
            brief: '-- He can chunk you or potentially all-in you if you get stunned.\n-- Be very wary if he goes into the fog of war, he may be throwing his stun.\n-- You have low kill pressure on him post-6',

        },

        'ezreal': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'fiddle': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },
        'fiddlesticks': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'fizz': {
            difficult: 'Hard',
            win_rate: '',
            starting_items: '',
            rune: 'Grasp',
            sum_spells: 'Flash + Exhaust',
            brief: '-- Don\'t overcommit with gold card if you are aware of his w is off cooldown.\n-- Establish a frozen lane before harassing him when he goes for cs.\n-- He wins trade post-3 when his W is up, and high kill potential post-6.',

        },

        'galio': {
            difficult: 'Free',
            win_rate: '',
            starting_items: '',
            rune: 'Either',
            sum_spells: 'Flash + Ignite/Cleanse',
            brief: '-- TF hard counters Galio. Just don\'t die early, his base damage is high.\n-- You can follow his roams and beat him in lane.\n-- Stun him when he charges up his taunt and he won\'t be able to flash + taunt your team.',

        },

        'gangplank': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },
        'gp': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'heimer': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },
        'heimerdinger': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'jayce': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'karma': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'karthus': {
            difficult: 'Easy/Medium (depending on well you dodge)',
            win_rate: '',
            starting_items: '',
            rune: 'Comet',
            sum_spells: 'Flash + Ignite/Ghost',
            brief: '-- You can actually kill him early as long as you dodge his Q spam.',

        },

        'kass': {
            difficult: 'Hard',
            win_rate: '',
            starting_items: '',
            rune: 'Grasp',
            sum_spells: 'Flash + Exhaust/Heal',
            brief: '-- He will try to spam Q you.\n-- Respect his insane mobility especially post-11.',

        },
        'kassadin': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'kat': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },
        'katarina': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'leblanc': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'lissandra': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'lucian': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'lux': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'malzahar': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'morgana': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'ori': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },
        'orianna': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'pantheon': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'ryze': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'swain': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'syndra': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'taliyah': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'talon': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'tf': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },
        'twistedfate': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'veigar': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'velkoz':{
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },
        'vel\'koz': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'viktor': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'vladimir': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'xerath': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'yasuo': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'zed': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'ziggs': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'zilean': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'zoe': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'zyra': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

    }
}