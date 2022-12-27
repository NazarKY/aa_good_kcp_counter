# frozen_string_literal: true

module Api
  module V1
    class DayStatisticController < ApplicationController
      before_action :set_day_static, only: %i[show destroy]

      def create
        day_static = DayStatistic.create!(day_static_params)
        return render(json: day_static, status: :created) if day_static

        render json: day_static.errors, status: :internal_server_error
      end

      def show
        render json: @day_static, status: :ok
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
    end
  end
end

