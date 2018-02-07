# KapuWrapper

Kapu API Wrapper in NodeJS.

## Built with
- [NodeJS](https://nodejs.org/en/) (8.9.1)
- [Axios](https://github.com/axios/axios)

## Installation


## Application Example


## Usage

### Account

```js

```

### Block

```js
var Block = require('./lib/block');

var block = new Block("dev");

block.getBlock("7359406859723672636");

// Or

block.getBlock("7359406859723672636", function(result) {
   console.log(result);
});

>>
{ success: true,
     block:
      { id: '7359406859723672636',
        version: 0,
        timestamp: 27903712,
        height: 1530831,
        previousBlock: '12716233488581418808',
        numberOfTransactions: 1,
        totalAmount: 14263719356,
        totalFee: 10000000,
        reward: 200000000,
        payloadLength: 32,
        payloadHash: '8d7ebb2295eb4bc124adbd9bc820a0589fe17b2638fb2c385063b3c8550985cd',
        generatorPublicKey: '03f954a4134a5ad6bab059ffd7fcbe8da5576dd13404628bae2dcc53d955912f87',
        generatorId: 'KEGbq5GYJPiWaq5KP4bP5ucZLmMGgWptpB',
        blockSignature: '3045022100f6e6a564812c2b7510887d50f6a41aea7e1a0ab71aa1ab101779774ab24d12f90220796dbbddb2d1c14083d56fbc85133ef23153b3d465ecd4e62542da6e55c93e64',
        confirmations: 3736,
        totalForged: '210000000' } }
```

### Delegate

```js

```

### Loader

```js

```

### MultiSignature

```js

```

### Peer

```js

```

### Signature

```js

```

### Transaction

```js

```

### Transport

```js

```

## TODOS

## Authors

- Jolan Beer - Highjhacker

## License

KapuWrapper is under MIT license. See the [LICENSE file](https://github.com/Highjhacker/kapuwrapper/blob/master/LICENSE) for more informations.
