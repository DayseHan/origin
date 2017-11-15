;(function($){
	// $.prototype.lxCarousel = function(){
	// 	// this => $('.box')
	// 	// 这里的this为jquery对象（实例）
	// }

	$.fn.jjCarousel = function(options){
		// 默认属性
		var defaults = {
			width:0,
			height:0,
			imgs:[],

			ele:'.carousel',

			// 图片切换间隔时间
			duration:3000,

			// 滚动类型
			type:'vertical',//horizontal,fade

			// 自动轮播
			autoPlay:true,

			// 默认索引值
			index:0,

			// 是否显示前后按钮
			buttons:false,

			// 是否显示页码
			page:false,

			//// 是否显示页码数字
			pageNum:false,

			// 是否无缝滚动
			wufeng:false,
		}
		return this.each(function(){
			var $self = $(this);

			// 覆盖默认参数
			var opt = jQuery.extend({},defaults,options);

			

			var Car = {
				//创建节点
				//绑定事件
				init(opt){
					$self.addClass('carousel');
					$self.css('width',opt.width).css('height',opt.height);
					var $sf = $(this);
					this.index = opt.index;
					this.opt = opt;
					let ul = document.createElement('ul');
					ul.innerHTML = opt.imgs.map(item=>{
						return `<li><img src="${item}"></li>`
					}).join('');

					$self.append(ul);
					// 给this添加属性，以便传递参数
					this.len = opt.imgs.length;
					this.ul = ul;

					this.move();

					// 是否自动轮播
					if(opt.autoPlay){
						this.start();

						// 鼠标移入移出
						$self.on('mouseenter',function(){
							this.stop();
						}.bind(this)).on('mouseleave',function(){
							this.start();
						}.bind(this))
					}

					// 分页
					if(opt.page){
						var x;
						let $page = $('<div/>');
			            $page.addClass('page');
			            for(let i =1; i<=this.len;i++){
			                let $span = $('<span/>');
			                $span.text(i);
			                $page.append($span);
			                $page.find('span').eq(this.index).addClass('active');
			            }
			            $self.append($page);

			            $page.on('click','span',function(e){
			            	e = e || window.event
			            	let target = e.target || e.srcElement;
			            	this.index = $(target).text()-1;
			            	this.move();
			            }.bind(this));
			         	if(!opt.pageNum){
			         		$page.css('font-size','0');
			         	}
					}
					// 前后按钮
					if(opt.buttons){
						let $btnNext = $('<span/>');
            			let $btnPrev = $('<span/>');
            			$btnNext.addClass('next').html('&gt').appendTo($self);
			            $btnPrev.addClass('prev').html('&lt').appendTo($self);
			            // $self.on('click','.next .prev',function(){
			            // 	if($(this).has('.next')){
			            // 		this.index++;
			            // 		this.move();
			            // 	}else if($(this).has('.prev')){
			            // 		this.index--;
			            // 		this.move();
			            // 	}
			            	
			            // }.bind(this));
			            $('.next').on('click',function(){console.log(666)
			            		this.index++;
			            		this.move();
			            }.bind(this));

			            $('.prev').on('click',function(){
			            		this.index--;
			            		this.move();
			            }.bind(this));
			             
			            
					}
					if(this.opt.type === 'horizontal'){
						$self.find('ul').css('width',opt.width*this.len).find('li').css('float','left').find('img').css('float','left');
					}

				},
				move(){
					if(this.index>this.len-1){
						this.index = 0;
					}else if(this.index < 0){
						this.index = this.len - 1;
					}
					let target = {};
					if(this.opt.type === 'vertical'){
						target.top = -this.index*this.opt.height;
					}else if(this.opt.type === 'horizontal'){
						target.left = -this.index*this.opt.width;
					}
					$self.find('ul').stop().animate(target).next().find('span').eq(this.index).addClass('active').siblings('span').removeClass('active');
					
				},
				stop(){
					clearInterval(this.timer);
				},
				start(){
					this.timer = setInterval(()=>{
						this.index++;
						this.move();
					},this.opt.duration);
				},
				next(){
					this.index++;
					this.move();
				},
				prev(){
					this.index--;
					this.move();
				}
			}

			Car.init(opt);
		})

	}

	$.fn.lxTab = function(){
		
	}

	// 写系列插件
	// $.fn.extend({
	// 	lxCarousel(){

	// 	},
	// 	lxTab(){

	// 	}
	// })
})(jQuery);

