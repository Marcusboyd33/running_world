class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(email: params[:id])
  end

  def user
    render json: current_user
  end

  # def create
  #
  # end
end
