export function subscriber(eventClass,handler)
{
    let modifiedHandler=function(event)
    {
        handler(...event.detail)
    }
    document.addEventListener(eventClass.name,modifiedHandler,{passive:true});
    return{
        unsubscribe:function unsubscribe()
        {
            document.removeEventListener(eventClass.name,modifiedHandler);
        }
    }
}
export function publish(event)
{
    let nativeEvent=new CustomEvent(event.constructor.name,{
        detail:event.args
    })
    document.dispatchEvent(nativeEvent)
}