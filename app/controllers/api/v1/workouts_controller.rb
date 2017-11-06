class Api::V1::WorkoutsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  skip_before_action :verify_authenticity_token

  def index
    @workouts = Workout.all
    render json: @workouts
  end

  # def index
  #   user_id = params[:user_id]
  #
  #   @workouts = Workout.where(user_id: user_id).map do |workout|
  #     workout.as_json.merge
  #   end
  #   render json: @workouts
  # end

  def show
    @workout = Workout.find(params[:id])
    render json: @workout
  end

  def create
    @workouts = Workout.new(workout_params)
    @workouts.user = current_user
    render json: @workouts
  end

  # private

  def workout_params
    params.permit(:racetype, :time, :distance, :rest, :reps, :intervaldistance)
  end
end
