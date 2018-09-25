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
            difficult: 'Easy',
            win_rate: '',
            starting_items: '',
            rune: rune[2],
            sum_spells: 'Flash + Exhaust',
            brief: '',

        },

        'ekko': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

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
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'galio': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

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
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

        },

        'kass': {
            difficult: '',
            win_rate: '',
            starting_items: '',
            rune: '',
            sum_spells: '',
            brief: '',

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