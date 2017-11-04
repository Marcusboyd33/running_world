class Api::V1::WorkoutsController < ApplicationController
  # protect_from_forgery unless: -> { request.format.json? }

  def index
    @workouts = Workout.all
    render json: @workouts
  end

  def user_workouts_index
    user_id = params[:user_id]

    @workouts = Workout.where(user_id: user_id)
  end

  def show
    @workout = Workout.find(params[:id])
    render json: @workout
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user = current_user
    render json: @workout
  end

  # private

  def workout_params
    params.permit(:racetype, :time, :distance, :rest, :reps, :intervaldistance)
  end
end
