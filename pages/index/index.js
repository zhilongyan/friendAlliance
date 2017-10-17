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
    buttonIndex : 0,
    commodity  : [
      {
        name : '【俞兆林】 厚度适中 法兰绒四件套珊瑚绒冬季法莱绒加绒毛毯保暖被套卡通床套床品',
        price : 35.9,
        num : 7327,
        ready : [
          '/images/index/headImg.jpg',
          '/images/index/headImg.jpg'
        ],
        img : '/images/index/bed.jpg'
      },
      {
        name: '【俞兆林】 厚度适中 法兰绒四件套珊瑚绒冬季法莱绒加绒毛毯保暖被套卡通床套床品',
        price: 35.9,
        num: 7327,
        ready: [
          '/images/index/headImg.jpg',
          '/images/index/headImg.jpg'
        ],
        img: '/images/index/bed.jpg'
      },
      {
        name: '【俞兆林】 厚度适中 法兰绒四件套珊瑚绒冬季法莱绒加绒毛毯保暖被套卡通床套床品',
        price: 35.9,
        num: 7327,
        ready: [
          '/images/index/headImg.jpg',
          '/images/index/headImg.jpg'
        ],
        img: '/images/index/bed.jpg'
      },
      {
        name: '【俞兆林】 厚度适中 法兰绒四件套珊瑚绒冬季法莱绒加绒毛毯保暖被套卡通床套床品',
        price: 35.9,
        num: 7327,
        ready: [
          '/images/index/headImg.jpg',
          '/images/index/headImg.jpg'
        ],
        img: '/images/index/bed.jpg'
      }
    ]
  },
  onLoad : function(){
  },
  buttonChange : function(){
    let index  = this.data.buttonIndex;
    this.setData({buttonIndex : !index})
  }
})