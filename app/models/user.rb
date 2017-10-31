class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable



  def email_required?
    false
  end

  def email_change?
    false
  end

  validates :username, uniqueness: true
  validates_presence_of :username
  has_many :workouts
  has_many :comments, through: :workouts
end
