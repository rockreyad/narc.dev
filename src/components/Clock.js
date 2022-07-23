import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div class="grid grid-cols-4 auto-rows-max gap-2 lg:gap-8  md:grid-cols-4">
        <div class="space-y-4">
          <div class="relative sm:h-20 sm:w-20 lg:h-36 lg:w-36 bg-darkest-blue rounded-lg">
            <div class="absolute top-0 left-0 right-0 bottom-2 rounded-lg">
              <div class="h-full flex flex-col justify-between space-y-px">
                <div class="relative h-full w-full bg-dark-blue opacity-75 rounded-tl-lg rounded-tr-lg card__top"></div>
                <div class="relative h-full w-full bg-dark-blue rounded-bl-lg rounded-br-lg card__bottom"></div>
              </div>
            </div>
            <div class="absolute top-0 left-0 right-0 bottom-2 flex items-center justify-center">
              <span class="text-soft-red font-bold text-xl lg:text-6xl font-red-hat">
                {this.leading0(this.state.days)}
              </span>
            </div>
          </div>
          <div class="text-center">
            <span class="uppercase text-sm text-grayish-blue font-bold tracking-[.3em]">
              days
            </span>
          </div>
        </div>
        <div class="space-y-4">
          <div class="relative sm:h-20 sm:w-20 lg:h-36 lg:w-36 bg-darkest-blue rounded-lg">
            <div class="absolute top-0 left-0 right-0 bottom-2 rounded-lg">
              <div class="h-full flex flex-col justify-between space-y-px">
                <div class="relative h-full w-full bg-dark-blue opacity-75 rounded-tl-lg rounded-tr-lg card__top"></div>
                <div class="relative h-full w-full bg-dark-blue rounded-bl-lg rounded-br-lg card__bottom"></div>
              </div>
            </div>
            <div class="absolute top-0 left-0 right-0 bottom-2 flex items-center justify-center">
              <span class="text-soft-red font-bold text-xl lg:text-6xl  font-red-hat">
                {" "}
                {this.leading0(this.state.hours)}
              </span>
            </div>
          </div>
          <div class="text-center">
            <span class="uppercase text-sm text-grayish-blue font-bold tracking-[.3em]">
              hours
            </span>
          </div>
        </div>
        <div class="space-y-4">
          <div class="relative sm:h-20 sm:w-20 lg:h-36 lg:w-36 bg-darkest-blue rounded-lg">
            <div class="absolute top-0 left-0 right-0 bottom-2 rounded-lg">
              <div class="h-full flex flex-col justify-between space-y-px">
                <div class="relative h-full w-full bg-dark-blue opacity-75 rounded-tl-lg rounded-tr-lg card__top"></div>
                <div class="relative h-full w-full bg-dark-blue rounded-bl-lg rounded-br-lg card__bottom"></div>
              </div>
            </div>
            <div class="absolute top-0 left-0 right-0 bottom-2 flex items-center justify-center">
              <span class="text-soft-red font-bold text-xl lg:text-6xl font-red-hat">
                {this.leading0(this.state.minutes)}
              </span>
            </div>
          </div>
          <div class="text-center">
            <span class="uppercase text-sm text-grayish-blue font-bold tracking-[.3em]">
              minutes
            </span>
          </div>
        </div>
        <div class="space-y-4">
          <div class="relative sm:h-20 sm:w-20 lg:h-36 lg:w-36 bg-darkest-blue rounded-lg">
            <div class="absolute top-0 left-0 right-0 bottom-2 rounded-lg">
              <div class="h-full flex flex-col justify-between space-y-px">
                <div class="relative h-full w-full bg-dark-blue opacity-75 rounded-tl-lg rounded-tr-lg card__top"></div>
                <div class="relative h-full w-full bg-dark-blue rounded-bl-lg rounded-br-lg card__bottom"></div>
              </div>
            </div>
            <div class="absolute top-0 left-0 right-0 bottom-2 flex items-center justify-center">
              <span class="text-soft-red font-bold text-xl lg:text-6xl font-red-hat">
                {this.leading0(this.state.seconds)}
              </span>
            </div>
          </div>
          <div class="text-center">
            <span class="uppercase text-sm text-grayish-blue font-bold tracking-[.3em]">
              seconds
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Clock;
