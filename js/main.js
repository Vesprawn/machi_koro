(function(){
    var cardLimit = 10;
    var cardIds = [];
    var chosen = [];
    
    var setup = function() {
        reset();
        setupBtns();
        pickCards();
    };
    
    var setupBtns = function() {
        $('#randomise').on('click', pickCards);
    };
    
    var pickCards = function() {
        reset();
        
        var len = cardLimit, i = 0;
       
        
        while(len--) {
            var x = Math.floor(Math.random() * cardIds.length);
            chosen.push(cardIds[x]);
            cardIds.splice(x, 1);
            i++;   
        }
        
        showCards();
    };
    
    var reset = function() {
        chosen = [];
        cardIds = [];  
        addCardIds();
        $('#results_container').html('');
    };
    
    var addCardIds = function() {
        var len = machiKoroCards.length,
            i = 0;
            
        while(len--) {
            cardIds.push(machiKoroCards[i]);
            i++;
        }
    };
    
    var showCards = function() {
        var len = chosen.length, i = 0;
        
        chosen.sort(compare);

        while(len--) {
            // var result = getCardById(chosen[i]);
            var sb = ['<div class="card ',
                chosen[i].type,
                '">',
                '<header>',
                '<div class="roll">',
                chosen[i].roll,
                '</div>',
                '<div class="name">',
                chosen[i].name,
                '</div>',
                
                '</header>',
                '<footer>',
                '<div class="rule">',
                chosen[i].rule,
                '</div>',
                '<div class="cost">',
                chosen[i].cost,
                '</div>',
                '</footer>',
                '</div>'];
            
            $('#results_container').append($(sb.join('')));
            i++;
        }
    };
    
    var getCardById = function(id) {
        var len = machiKoroCards.length, i =0;
        
        while(len--) {
            if(machiKoroCards[i].id === id) {
                return machiKoroCards[i];
            }
            i++;
        }
        
        return null;
    };

    var compare = function (a, b) {
        if(a.value < b.value) {
            return -1;
        } else if(a.value > b.value) {
            return 1;
        } else {
            return 1;
        }
    };


    
    setup();
})();