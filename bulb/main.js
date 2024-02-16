const $shadow = document.querySelector('shadow');
const $light = document.querySelector('bulb');
const $filament = document.querySelector('filament')

$light.addEventlistener{
    'click',
    () =>{
        $light.classlist.toggle('off');
        $shadow.classlist.toggle('off');
        $filament.classlist.list.toggle('off');
    };
};