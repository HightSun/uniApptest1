<template>
      <view>
          <view class="status_bar">
              <!-- 这里是状态栏 -->
          </view>
          <!-- <view> 状态栏下的文字 </view> -->
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
            
		</view>
	</view>
      </view> 
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hight婷很厉害很🐂呀'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;}
	

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;}
	

	t.ext-area {
		display: flex;
		justify-content: center;}
	

	.title {
		font-size: 36rpx;
		color: #8f8f94;}
	
    
      .status_bar {
          height: var(--status-bar-height);
          width: 100%;
          }
      
</style>
