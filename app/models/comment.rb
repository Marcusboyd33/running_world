class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validates_presence_of :body

  def as_json(options = {})
    super(methods: :user)
  end
end
