exports.Matchups = function() {
    var matchup = this;
    
    /*
    
    
    
    
    
    
    
    */ 


    matchup.listOfChamps = {
        'ahri': {
            difficult: `Medium/Hard`,
            win_rate: ``, //prolly get it from op.gg
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Ignite/Cleanse`,
            brief: `-- Don\'t stay in lane while chunked, Ahri can cover immense amounts of ground.\n-- Due to Ignite+Electrocute, her kill pressure post-6 has become quite high.\n-- She becomes squishy later in the game, and you outscale.`
            
        },

        'akali': {
            difficult: `Easy-Hard (depending on Akali\'s skill)`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Exhaust`,
            brief: `-- The difference between a good and bad Akali is night and day.\n-- Stay back, respect her damage, treat her like a Fizz.\n-- Your ult reveals her but she is still untargetable in the shroud.\n-- Take Grasp and pressure her early game.\n-- Exhaust is good, since her burst takes some time.`,

        },

        'anivia': {
            difficult: `Easy`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite`,
            brief: ``,

        },

        'annie': {
            difficult: `Easy`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: ``,
            brief: `-- Know her damage at all times.\n-- She is a very flash reliant champion.\n-- Her waveclear is not great, but she can CS relatively well under tower.\n-- Get MR if she targets you with her flash combo.`,
        
        },

        'aurelion': {
            difficult: `Hard`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ghost/Ignite`,
            brief: `-- If you stay in his melee range, he can\'t hit you with anything except AAs and R.\n-- He pushes hard early.\n-- Don\'t try to fight him between corrupting pot, minion advantage, and superfast backs, he has all the tools needed to beat TF early.\n-- He can sort of match your roams but is slower.\n-- If you stun him at the right time, he\'ll miss his Q and his passive damage will decrease dramatically.`,

        },
        'aurelionsol': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },
        'asol': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'azir': {
            difficult: `Easy`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite`,
            brief: ``,

        },

        'brand': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'cass': {
            difficult: `Easy`,
            win_rate: ``,
            starting_items: `Boots + pots`,
            rune: `Comet`,
            sum_spells: `Flash + Ignite/Exhaust/Cleanse`,
            brief: `-- Dodge her Q and R.\n-- She has a strong level 1 cheese, be wary.\n-- If she can hit her Q+R, her damage is high.\n-- Her waveclear is bad, but you can only really abuse this post-6.\n-- She outscales you after midgame.`,

        },
        'cassiopeia': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'corki': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'diana': {
            difficult: `Medium`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Exhaust`,
            brief: `-- Dodge as much of her Q as possible.\n-- She has better resistance to poke than most melee champs, and a surprisingly strong all-in post-6.\n-- Be careful, her engage range is long. However, she doesn\'t have an escape after engaging nor a way to avoid getting stunned.\n-- Save a stun/exhaust for her if she commits.`,

        },

        'ekko': {
            difficult: `Medium`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Cleanse/Heal/Ignite`,
            brief: `-- He can chunk you or potentially all-in you if you get stunned.\n-- Be very wary if he goes into the fog of war, he may be throwing his stun.\n-- You have low kill pressure on him post-6`,

        },

        'ezreal': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'fiddle': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },
        'fiddlesticks': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'fizz': {
            difficult: `Hard`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Exhaust`,
            brief: `-- Don\'t overcommit with gold card if you are aware of his w is off cooldown.\n-- Establish a frozen lane before harassing him when he goes for cs.\n-- He wins trade post-3 when his W is up, and high kill potential post-6.`,

        },

        'galio': {
            difficult: `Free`,
            win_rate: ``,
            starting_items: ``,
            rune: `Either`,
            sum_spells: `Flash + Ignite/Cleanse`,
            brief: `-- TF hard counters Galio. Just don\'t die early, his base damage is high.\n-- You can follow his roams and beat him in lane.\n-- Stun him when he charges up his taunt and he won\'t be able to flash + taunt your team.`,

        },

        'gangplank': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },
        'gp': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'heimer': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },
        'heimerdinger': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'irelia': {
            difficult: `Hard`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Exhaust`,
            brief: `-- Very strong early.\n-- Don\'t hesitate to flash her stun, she does immense amounts of damage.\n-- Freeze wave under tower.`,

        },

        'jayce': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'karma': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'karthus': {
            difficult: `Easy/Medium (depending on well you dodge)`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite/Ghost`,
            brief: `-- You can actually kill him early as long as you dodge his Q spam.`,

        },

        'kass': {
            difficult: `Hard`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Exhaust/Heal`,
            brief: `-- He will try to spam Q you.\n-- Respect his insane mobility especially post-11.`,

        },
        'kassadin': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'kat': {
            difficult: `Medium/Hard`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Exhaust`,
            brief: `-- Pressure her early.\n-- Don\'t stand on the daggers or near them. The Sinister Steel actually has a larger radius than the dagger\'s circle.\n-- Respect her all-in potential.\n-- Save your stun for her ult.\n-- Kat likes to roam, so be ready to match. However, don\'t follow her in the fog of war, she might wait there.`,

        },
        'katarina': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'leblanc': {
            difficult: `Hard`,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: `Flash + TP/Heal/Exhaust/Cleanse`,
            brief: `-- She is strong early game, but falls off as long as you don\'t give her a lead.\n-- Play safe.\n-- Respect her gank assist and range, cleanse may be good.\n-- She has no way to dodge your W in team fights except Zhonya.`,

        },

        'lissandra': {
            difficult: `Easy`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Cleanse`,
            brief: `-- Take Cleanse\n-- Respect her mobility and cc (even if you have cleanse, she can still slow you decently long).\n-- You can cancel her E recast with your stun if you do it at the right time.\n-- Don\'t expect to kill her in lane, but she\'s not very threatening either.`,

        },

        'lucian': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'lux': {
            difficult: `Easy`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite`,
            brief: `Don\'t eat too much poke.\n-- She has little kill potential without Q.`,

        },

        'malzahar': {
            difficult: `Easy`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite`,
            brief: `-- Buy QSS if he targets you often\n-- You can deny his hard push E+W with Red Card.\n-- Respect his Flash + Ult if you don\'t have QSS ult`,

        },

        'morgana': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'ori': {
            difficult: `Medium`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite`,
            brief: `-- Move unpredictably while csing, so Ori would have a harder time poking with Q/Q+W.\n-- Trading with her is hard because of her extra resist, range and shield.`,

        },
        'orianna': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'pantheon': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'ryze': {
            difficult: `Free`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite`,
            brief: `-- He\'s actually weaker than TF early, however he will outscale you late game.`,

        },

        'swain': {
            difficult: `Hard`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet/Grasp`,
            sum_spells: `Flash + Ignite/Exhaust`,
            brief: `-- His early game isn\'t great, but still better than yours.\n-- Never take an extended fight with him.`,

        },

        'syndra': {
            difficult: `Medium`,
            win_rate: ``,
            starting_items: ``,
            rune: `Flash + Ignite/Cleanse/Exhaust`,
            sum_spells: `Comet`,
            brief: `-- Get early MR, respect her insane possible damage.\n-- Dodge the stun (move sideway unpredictably or don\'t face her directly opposite from a dark sphere)\n-- She has very high single target burst, but she is immobile thus prone to gank, and doesn\'t scale particularly well.\n-- Consider taking stopwatch to prevent yourself from eating massive single target damage (up to 630 base damage at level 6).\n-- Once you get a few items, you can 1v1 Syndra so long you dodge her stun and most of her damage.\n`,

        },

        'taliyah': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'talon': {
            difficult: `Hard`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Exhaust`,
            brief: `-- Respect his early damage. He will try to get level priority while hurting to prepare his all-in.\n-- His level 2 kill potential is very high due to Electrocute + Passive + Ignite. Flash his W if you must.\n-- He can also roam well as early as level 2/3, unfortunately. Often times, your win condition is just denying as much talon\'s roam as possible with wards and ult`,

        },

        'tf': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },
        'twistedfate': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'veigar': {
            difficult: `Easy`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Cleanse`,
            brief: `-- Take Cleanse, walk through the cage, and kill him (or get away from ganks).\n-- He isn\'t threatening if you dodge his spells and most Veigars won\'t expect it.`,

        },

        'velkoz':{
            difficult: `Easy/Medium depending on your dodging skill`,
            win_rate: ``,
            starting_items: `Boots + Pot`,
            rune: `Comet`,
            sum_spells: `Flash + Ignite/Ghost`,
            brief: `If he maxes Q, buy boots, push him in, and show him his foolishness.\n-- If he maxes W (waveclear), it\'s a farm lane.\n-- Dodge his knockup, it holds the rest of his kit together.\n-- If you can cancel his R with your stun, that will negate majority of his damage.`,

        },
        'vel\'koz': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'viktor': {
            difficult: `Medium`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite/Heal/TP`,
            brief: `-- One of the stronger mages early game.\n-- Don\'t fight him when all of his cooldown is off. His burst comes out almost instantly\n-- Try to dodge his E spam, he most likely tries to angle in a way to last hit a minion as well as damaging you.\n-- Definitely don\'t sit in the stun field.`,

        },

        'vladimir': {
            difficult: `Medium/Hard depending on his build`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite/Barrier`,
            brief: `-- If he goes full damage build, then get MR. He can 1 shot you from full HP post-6\n-- If he goes the CDR build, then you or your team needs to buying healing reduction.`,

        },

        'xerath': {
            difficult: `Easy-Hard depending on the skills. Cry if they are scripting.`,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: `Flash + Ignite/Ghost/TP`,
            brief: `-- Start boots and dodge his spells.\n-- He is very squishy and immobile, thus prone to gank if overextends.`,

        },

        'yasuo': {
            difficult: `Hard`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Exhaust`,
            brief: `-- Learn how to CS under tower because you don\'t want to overextend against him especially post-3.\n-- Take Grasp and poke him with AAs\n-- Bait his windwall before a gank to minimize risk.\n-- An annoying matchup since Yasuo has free priority just by being a dickhead.`,

        },

        'zed': {
            difficult: `Medium`,
            win_rate: ``,
            starting_items: ``,
            rune: `Grasp`,
            sum_spells: `Flash + Exhaust`,
            brief: `-- Dodge Q.\n-- Don\'t stun him when you know he can R it.\n-- Prioritize Zhonya earlier if behind. Otherwise, getting a stopwatch around level 6 can prevent his early snowball.\n-- Exhaust is particularly effective vs Zed.\n-- Take Grasp and pressure him early.\n-- Be prepared to dodge his W+E+Q combo, it hurts.`,

        },

        'ziggs': {
            difficult: `Easy`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash + Ignite`,
            brief: `-- A very skillshot reliant champ\n-- Farm lane, go roam.\n-- Don\'t stand in the wave that he would be able to push while hitting you at the same time.`,

        },

        'zilean': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

        'zoe': {
            difficult: `Easy/Medium depending on your skills`,
            win_rate: ``,
            starting_items: ``,
            rune: `Comet`,
            sum_spells: `Flash+Ignite/Cleanse`,
            brief: `-- Her Q has small splash damage upon contact, so avoid standing close to your minions.\n-- When she goes into the fog of war, she is likely to wait to hit her sleep.`,

        },

        'zyra': {
            difficult: ``,
            win_rate: ``,
            starting_items: ``,
            rune: ``,
            sum_spells: ``,
            brief: ``,

        },

    }
}