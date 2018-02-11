[![Build Status](https://travis-ci.org/Highjhacker/kapuwrapper.svg?branch=master)](https://travis-ci.org/Highjhacker/kapuwrapper)
[![HitCount](http://hits.dwyl.io/highjhacker/kapuwrapper.svg)](http://hits.dwyl.io/highjhacker/kapuwrapper)

# KapuWrapper

Kapu API Wrapper in NodeJS.

## Built with
- [NodeJS](https://nodejs.org/en/) (8.9.1)
- [Axios](https://github.com/axios/axios)
- [Mocha](https://mochajs.org/)

## Installation


## Application Example


## Usage

### Account

```js
var Account = require('kapuwrapper').Account();

var account = new Account();

account.getBalance("KSdLN3truDB6TXM2roW9XBJyc3TfNfYLFA", function (response) {
    console.log(response);
});

>>> { success: true,
      balance: '23489480000013',
      unconfirmedBalance: '23489480000013' }
```

### Block

```js
var Block = require('kapuwrapper').Block();

var block = new Block();

block.getBlock("12910338651664878115", function (resp) {
    console.log(resp);
});

>>> { success: true,
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
        totalForged: '210000000'
      }
   }
```

### Delegate

```js
var Delegate = require('kapuwrapper').Delegates();

var delegate = new Delegate();

// By publicKey
delegate.getDelegate("02f6616a85a2ff1ce03aeebaffa464a7b7c67204ebd6f549168c5d3af290f4c821", function(result) {
    console.log(result);
});

// Or by name
delegate.getDelegate("thefoundry", function(result) {
    console.log(result);
});

>>> { success: true,
      delegate:
       { username: 'thefoundry',
         address: 'KDDZBdEBiV1FJ7eg4kdjtjkvMiUWo5zmMA',
         publicKey: '02f6616a85a2ff1ce03aeebaffa464a7b7c67204ebd6f549168c5d3af290f4c821',
         vote: '46661571435853',
         producedblocks: 1785,
         missedblocks: 19,
         rate: 51,
         approval: 0.4,
         productivity: 98.95 } }

// Searching for a delegate
del.searchDelegates({"q": "dr", "limit": 1}, function (resp) {
    console.log(resp);
});

>>> { success: true,
      delegates:
       [ { username: 'djandre',
           address: 'KUQc9hNoG4o81t1gwkYTapPqJrxp8Zxf9Y',
           publicKey: '02cf4cd8d6047c8081a18911881923d2bbba1db743930e858588a15670090b1a53',
           vote: '88672392071858',
           producedblocks: 30260,
           missedblocks: 59 } ] }
```

### Loader

```js
var Loader = require('kapuwrapper').Loader;

var loader = new Loader();

loader.getStatus(function (err) {
    console.log(err);
});

>>> { success: true,
      network:
       { nethash: '313ea34c8eb705f79e7bc298b788417ff3f7116c9596f5c9875e769ee2f4ede1',
         token: 'KAPU',
         symbol: 'ʞ',
         explorer: 'http://explorer.kapu.one',
         version: 45 } }
```

### MultiSignature

```js
var MultiSignature = require('kapuwrapper').MultiSignature();

var multisig = new MultiSignature();

multisig.getAccounts("02cf4cd8d6047c8081a18911881923d2bbba1db743930e858588a15670090b1a53", function (resp) {
    console.log(resp);
});

>>>
```

### Peer

```js
var Peer = require('kapuwrapper').Peer();

var peer = new Peer();

peer.getPeer("51.15.201.56", "4600", function (response) {
    console.log(response);
});

>>> { success: true,
      peer:
       { ip: '51.15.201.56',
         port: 4600,
         version: '0.3.0',
         errors: 0,
         os: 'linux4.4.87-mainline-rev1',
         height: 1545921,
         status: 'OK',
         delay: 37 } }
```

### Signature

```js
var Signature = require('kapuwrapper').Signature();

var signature = new Signature();

signature.getSignatureFee(function (response) {
    console.log(response);
});

>>> { success: true, fee: 500000000 }
```

### Transaction

```js
var Transaction = require('kapuwrapper').Transaction();

var transaction = new Transaction();

transaction.getTransaction("d89889337eb760d8ca2d4c5a2c4a8e64765896ce9f2f5abbfc603a721a4ae2dd", function (response) {
    console.log(response);
});

>>> { success: true,
      transaction:
       { id: 'd89889337eb760d8ca2d4c5a2c4a8e64765896ce9f2f5abbfc603a721a4ae2dd',
         blockid: '14778506381932162769',
         height: 1543843,
         type: 0,
         timestamp: 28007843,
         amount: 19734606764,
         fee: 10000000,
         senderId: 'KSUpE6nkLEj8snVGcUREb6AhHty7jzwTHq',
         recipientId: 'KSdLN3truDB6TXM2roW9XBJyc3TfNfYLFA',
         senderPublicKey: '024282d508db4e3ef63707521bffc16ccb763ae8404543c1625a78801b41b964ce',
         signature: '3045022100982fe5a122553d80ba45d6b200a0d0fcb1889ed03f90d48dafd226f4d2fb27db022079c1169017d8fb2cb042341367e5151b0311264d651d3772af2fb47d2e574639',
         asset: {},
         confirmations: 3169 } }
```

### Transport

```js
var Transport = require('kapuwrapper').Transport();

var transport = new Transport();

transport.getHeight(function (response) {
    console.log(response);
});

>>> { success: true,
      height: 1547506,
      header:
       { id: '15708167116996036265',
         height: 1547506,
         version: 0,
         totalAmount: 0,
         totalFee: 0,
         reward: 200000000,
         payloadHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
         payloadLength: 0,
         timestamp: 28037160,
         numberOfTransactions: 0,
         previousBlock: '13300191520519744676',
         generatorPublicKey: '02e4e24ea72fade8328c67fa080ef5871509e6508ab24ed91877e6d0b68fa02616',
         blockSignature: '30440220282b15f0e0893c7986a91107cf633866de9c14f53cdc118d3c3f3b4d20937e8702204d845e462e2accad871d6f97acfe5b933c2fd81dcc0e560ad94ed442eb63fa31' } }
```

## TODOS
- [ ] Package it for NPM.
- [ ] Package it for Yarn ?
- [x] Write tests.
- [x] Travis.
- [ ] Implement network switch for later.
- [ ] Better documentation.
- [ ] Check the code, and again.
- [ ] Implement the creation of a new tx.
- [ ] Migrate from NPM to Yarn ?
- [ ] getCommonBlocks & getTransactionsFromIds doesn't works, need to rewrite a bit the functions, they are the only
tests who fails right now.

## Author

- Jolan Beer - Highjhacker

## Contributors

- Colby Mort

## License

KapuWrapper is under MIT license. See the [LICENSE file](https://github.com/Highjhacker/kapuwrapper/blob/master/LICENSE) for more informations.
