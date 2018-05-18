class UsersController < ApplicationController
  load_and_authorize_resource

  def index
    render json: @users.order('id ASC')
  end

  def show
    render json: @user
  end
end
