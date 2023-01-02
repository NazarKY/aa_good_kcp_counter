# frozen_string_literal: true

module Api
  module V1
    # Resource controller that represents daily statistic of loses
    class DayStatisticController < ApplicationController
      before_action :set_day_static, only: %i[show destroy create]
      before_action :set_previous_day_static, only: %i[show]

      def create
        new_day_static = DayStatistic.create!(day_static_params)
        return render(json: { current: new_day_static, previous: @day_static }, status: :created) if new_day_static

        render json: new_day_static.errors, status: :internal_server_error
      end

      def show
        render json: { current: @day_static, previous: @previous_day_static }, status: :ok
      end

      def destroy
        render json: {}
      end

      private

      def day_static_params
        params.require(:day_statistic).permit(:pig_dogs, :artillery, :helicopters, :aircraft, :tanks, :apv, :mlrs)
      end

      def set_day_static
        @day_static = DayStatistic.last
      end

      def set_previous_day_static
        @previous_day_static = DayStatistic.last(2).first
      end
    end
  end
end

