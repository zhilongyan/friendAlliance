Page({
  data: {
    imgUrls: [
      '/images/index/swiper1.jpg',
      '/images/index/swiper2.jpg',
      '/images/index/swiper3.jpg'
    ],
    buttonGroup : [
      [
        {
          img : '/images/index/secKill.png',
          text : '限时秒杀'
        },
        {
          img: '/images/index/clearance.png',
          text: '品牌清仓'
        },
        {
          img: '/images/index/discount.png',
          text: '名品折扣'
        },
        {
          img: '/images/index/sea.png',
          text: '海淘'
        },
        {
          img: '/images/index/secKill.png',
          text: '限时秒杀'
        },
        {
          img: '/images/index/clearance.png',
          text: '品牌清仓'
        },
        {
          img: '/images/index/discount.png',
          text: '名品折扣'
        },
        {
          img: '/images/index/sea.png',
          text: '海淘'
        },
        {
          img: '/images/index/secKill.png',
          text: '限时秒杀'
        },
        {
          img: '/images/index/clearance.png',
          text: '品牌清仓'
        }
      ],
      [
        {
          img: '/images/index/sea2.png',
          text: '限时秒杀'
        },
        {
          img: '/images/index/sea2.png',
          text: '品牌清仓'
        },
        {
          img: '/images/index/sea2.png',
          text: '名品折扣'
        },
        {
          img: '/images/index/sea2.png',
          text: '海淘'
        },
        {
          img: '/images/index/sea2.png',
          text: '限时秒杀'
        },
        {
          img: '/images/index/sea2.png',
          text: '品牌清仓'
        },
        {
          img: '/images/index/sea2.png',
          text: '名品折扣'
        },
        {
          img: '/images/index/sea2.png',
          text: '海淘'
        },
        {
          img: '/images/index/sea2.png',
          text: '限时秒杀'
        },
        {
          img: '/images/index/sea2.png',
          text: '品牌清仓'
        }
      ]
    ],
    buttonIndex : 0
  },
  onLoad : function(){
  },
  buttonChange : function(){
    let index  = this.data.buttonIndex;
    this.setData({buttonIndex : !index})
  }
})