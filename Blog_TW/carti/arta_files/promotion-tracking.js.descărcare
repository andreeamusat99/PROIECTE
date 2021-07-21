function clickTrackingPromotion(trackingUrl)
{
    $.ajax({
       url: trackingUrl,
       dataType: "JSON",
       success: function(data){
           window.dataLayer = window.dataLayer || [];
           dataLayer.push(data);
       }
    });
}