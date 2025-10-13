<script setup>
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="text-content">
        <h1>
          Masterminds to <br> Your Positive Goal
        </h1>
        <p>Experience a rise in your pursuits with our expert consulting. We excel in <br> tailoring success strategies to your unique goals, covering diverse fields <br> for maximum impact, professionally and delightfully.</p>
        <UiButton style="max-width: 36%; margin-top: 7%;">
          Collaborate with Us
        </UiButton>
        <UiButton style="max-width: 24%; margin: 7% 0 0 5%; background: none; color: #EE4312;">
          Learn more
        </UiButton>
        <div class="text-line" />
      </div>
      <div class="img-content">
        <img
          src="/img/hero.jpg"
          alt=""
          class="img-hero"
        >
        <img
          src="/img/Vector.svg"
          alt=""
          class="img-vector"
        >
        <div class="hero-line" />
      </div>
    </div>
    <div class="block-information">
      <div class="block-main">
        <h1>This is Our result</h1>
        <p>How capable we are at work shines through <br> in every endeavor.</p>
      </div>
      <div class="block-info">
        <h1>160</h1>
        <p>Client Project</p>
      </div>
      <div class="block-info">
        <h1>340</h1>
        <p>Successful Project </p>
      </div>
      <div class="block-info">
        <h1>300+</h1>
        <p>Team Members</p>
      </div>
      <div class="block-info">
        <h1>82M</h1>
        <p>Total Revenue</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
h1{
  font-size: 64px;
  letter-spacing: 2%;
  font-weight: 700;
}
p{
  font-size: 17.5px;
  font-weight: 400;
  padding-top: 4%;
  line-height: 1.6;
}
.text-content{
  align-items: center;
  padding-top: 9%;
}
.img-hero{
  filter: grayscale(100%);
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
  bottom-left: 4%;
}
.hero-line{
  border-radius: 5%;
  border: 2px solid #EE4312;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 8%;
  left: 8%;
}
.text-line{
  width: 74%;
  border: 1px solid #EE4312;
  margin-top: 10%;
}
.img-vector{
  position: absolute;
  top: 5%;
  right: 80.6%;
}
.img-content{
  margin-left: 3.4%;
  position: relative;
}
.content{
  display: flex;
  flex-direction: row;
}
.block-information{
  display: flex;
  flex-direction: row;
  margin-top: 7%;
  width: 100%;
  white-space: nowrap;
}
.block-info{
  margin-right: 5%;
  text-align: center;
}
.block-main{
  margin-right: 7.5%;
  white-space: nowrap;
  margin-top: 2%;
  h1{
    font-size: 36px;
    line-height: 30px;
  }
  p{
    font-weight: 400;
  }
}
</style>
