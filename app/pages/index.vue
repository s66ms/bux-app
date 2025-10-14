<script setup>
</script>

<template>
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
  <div class="block-information-2">
    <div class="block-information-text">
      <h1>What We Can Offer You</h1>
      <p>Optimize your journey with our consulting services, delivering <br> personalized solutions for success.</p>
      <img
        src="/img/vector2.png"
        alt=""
        class="img-vector-2"
      >
      <div class="block-mini-info-1">
        <div class="mini-information">
          <img
            src="/img/group1.png"
            alt=""
          >
          <h1>Method Development</h1>
          <p>Strategic method development for <br> business  excellence and progress.</p>
        </div>
        <div class="mini-information">
          <img
            src="/img/group2.png"
            alt=""
          >
          <h1>Quality Assurance</h1>
          <p>Quality excellence for optimal and <br> sustainable business operation.</p>
        </div>
        <div class="mini-information">
          <img
            src="/img/group3.png"
            alt=""
          >
          <h1>Human Resources</h1>
          <p>Optimize human resources for <br> sustainable business growth.</p>
        </div>
      </div>
      <div class="block-mini-info-2">
        <div class="mini-information">
          <img
            src="/img/group4.png"
            alt=""
          >
          <h1>Policy Compliance</h1>
          <p>Strategic policy compliance  for<br>  seamless  business operations.</p>
        </div>
        <div
          class="mini-information"
          style="margin-left: 8%;"
        >
          <img
            src="/img/group5.png"
            alt=""
          >
          <h1>Business Strategies</h1>
          <p>
            Unlocking growth potential using <br> dynamic business strategies.
          </p>
        </div>
        <div class="mini-information">
          <img
            src="/img/group6.png"
            alt=""
          >
          <h1>Management System</h1>
          <p>Maximize productivity with our <br> advanced management structure.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="block-information-3">
    <div class="text-content-2">
      <h1>Know Our Story</h1>
      <p>
        Founded in 2019, Lumina is a leading web consulting firm based in <br> Malang, Indonesia. Our expert team specializes in web development,
        <br> design, digital marketing, and strategic consulting. We craft tailored
        <br> solutions to exceed client expectations, staying ahead of industry
        <br> trends to provide cutting-edge solutions. Beyond projects, we prioritize
        <br> lasting relationships, offering ongoing support for sustained success.
        <br>Whether you're a startup or an established enterprise, Lumina is your
        <br> dedicated partner in achieving digital excellence.
      </p>
      <UiButton style="max-width: 24.5%; margin-top: 8%;">
        Learn more
      </UiButton>
    </div>
    <div class="img-content-2">
      <img
        src="/img/hero2.png"
        alt=""
        class="img-hero-2"
      >
      <img
        src="/img/vector3.png"
        alt=""
        class="img-vector3"
      >
      <img
        src="/img/vector4.png"
        alt=""
        class="img-vector4"
      >
      <div class="hero-line-2" />
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
.hero-line-2{
  border-radius: 5%;
  border: 2px solid #EE4312;
  height: 22%;
  width: 28%;
  position: absolute;
  top: 77%;
  left: 55%;
}
.img-vector3{
  position: absolute;
  bottom: 18%;
  right: 47.2%;
}
.img-vector4{
  position: absolute;
  bottom: 2.5%;
  right: 17%;
}
.text-line{
  width: 74%;
  border: 1px solid #EE4312;
  margin-top: 12%;
}
.img-vector{
  position: absolute;
  top: 5%;
  right: 80.6%;
}
.img-vector-2{
  position: absolute;
  right: -11%;
  top: 5%;
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
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100%;
  white-space: nowrap;
}
.block-information-2{
  padding: 5% 0%;
  position: relative;
  //background: #F5F7FF;
  margin-bottom: -5%;
}
.block-information-3{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5% 0 5% 0;
  h1{
  font-weight: 700;
    font-size: 36px;
  }
  p{
  font-size: 17.5px;
  }
}
.text-content-2{
  margin-top: 10%;

}
.block-information-text{
  h1{
    font-size: 36px;
    line-height: 30px;
    margin-top: 5%;
  }
  p{
    font-size: 16px;
  }
}
.block-info{
  margin-right: 5%;
  text-align: center;
}
.cl-white{
  background: #F5F7FF;
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
.block-mini-info-1{
  display: flex;
  justify-content: row;
  white-space: nowrap;
  padding: 0 -3%;
}
.block-mini-info-2{
  display: flex;
  justify-content: row;
  white-space: nowrap;
  padding: 0% -3%;
}
.mini-information{
  align-content: center;
  margin-top: 4%;
  margin-right: 10%;
  margin-left: 5%;
  h1{
    margin-top: 10%;
    font-weight: 700;
    line-height: 32px;
    font-size: 22px;
    margin-bottom: 3%;
    text-align: center;
  }
  p{
    font-size: 14px;

  }
  img{
    margin-left: 25%;
  }
}
.img-hero-2{
  filter: grayscale(100%);
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;

}
</style>
