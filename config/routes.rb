Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "users#index"
  resources :workouts
  namespace "api" do
    namespace "v1" do
      resources :users, only: [:index, :show]
      resources :workouts
    end
  end
end
