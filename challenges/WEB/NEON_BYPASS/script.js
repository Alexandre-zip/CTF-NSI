(function(_0x1,_0x2){const _0x3=(_0x4,_0x5)=>{return _0x1[_0x4-0x100];};const _0x6=_0x1;while(!![]){try{const _0x7=parseInt(_0x3(0x102))/0x1+parseInt(_0x3(0x105))/0x2;if(_0x7===0x2a)break;else _0x6['push'](_0x6['shift']());}catch(_0x8){_0x6['push'](_0x6['shift']());}}})(['value','keydown','trim','Enter','charCodeAt','length','innerHTML','style','display','none','atob'],0x1);

const _0x4c21=['\x4e\x45\x4f\x4e\x5f\x50\x52\x4f\x54\x4f\x43\x4f\x4c\x5f\x32\x30\x32\x36'];

document.getElementById('inputField').addEventListener('keydown',function(_0x2e1a2f){
    if(_0x2e1a2f['key']==='Enter'){
        const _0x12a4=this['value']['trim']();
        let _0x3f1a=0x0;
        for(let _0x551a=0x0;_0x551a<_0x12a4['length'];_0x551a++){
            _0x3f1a=(_0x3f1a<<0x5)-_0x3f1a+_0x12a4['charCodeAt'](_0x551a);
            _0x3f1a& world = _0x3f1a;
        }

        if(_0x3f1a===-1164177708){
            document.getElementById('output')['innerHTML']='OK.<br>FLAG:'+atob('RkxBR3tOMzBOL1IzVTM2X0g0Q0tFUn0=');
            this['style']['display']='none';
        }else{
            document.getElementById('output')['innerHTML']='ERREUR.';
            this['value']='';
        }
    }
});