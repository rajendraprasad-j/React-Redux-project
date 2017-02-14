module.exports=function(app){
  app.get("/data",function(req,res){
    var responseJson= {
      products:[
        {
          title:'I Phone 6s',
          price:'65,000',
          quantity:10,
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0kluRfbpZ69r8X59g3sebsJBKSQkxir_PmAvzRc8vuojeW7TGQ'
        },
        {
          title:'I Phone 7s',
          price:'85,000',
          quantity:19,
          imageUrl:'http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/04/Apple-iPhone-6S_7835.jpg'
        },
      ]
    }
      res.statusCode=200;
      res.status(200).json(responseJson);
      res.end();
  });
  app.post("/data",function(req,res){
    console.log("Hello");
    var responseJson= {
      products:[
        {
          title:'I Phone 6s',
          price:'65,000',
          quantity:10,
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0kluRfbpZ69r8X59g3sebsJBKSQkxir_PmAvzRc8vuojeW7TGQ'
        },
      ]
    }
      res.statusCode=200;
      res.status(200).json(responseJson);
      res.end();
  });
}
