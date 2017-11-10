class Api::V1::UsersController < ApplicationController
  def index
    @user = current_user
    # @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  def user
    render json: current_user
  end
end
