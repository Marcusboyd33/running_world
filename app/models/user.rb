class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,:rememberable,
         :trackable, :validatable
        #  :recoverable



  def email_required?
    false
  end

  def email_changed?
    false
  end
  validates :email, uniqueness: true
  validates_presence_of :email
  has_many :workouts
  has_many :comments, through: :workouts
end
