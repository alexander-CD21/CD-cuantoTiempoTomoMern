
Number.prototype.isPrime = function() {
        raiz = Math.sqrt(this)
        for( let i=2; i<raiz; i++ ) {
            if( this % i === 0 ) {        
                return false;
            }
        }
        return true;
    }

    const { performance } = require('perf_hooks');
    const start = performance.now();
    let primeCount = 0;
    let num = 2; // por razones matemáticas, 1 se considera primo
    //el 10000 numero primo 
    
    while( primeCount < 1e4 ) {
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }
    //para el 100000
    /*
    while( primeCount < 1e5 ) {
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }*/
    //para 1000000
    /*while( primeCount < 1e6 ) {
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }*/
    console.log(`The 10,000th prime number is ${num-1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
    
    // recursive

    console.time('loop');
    function rFib( n ) {
      
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    rFib(20);
    console.timeEnd('loop');

    // iterative
    console.time('demora');
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    iFib(20);
    console.timeEnd('demora');