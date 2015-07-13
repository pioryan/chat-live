class HomeController < ApplicationController
  def index
    current_or_guest_user
    @messages = Message.all
  end

  def _run_logging_in_user_callbacks

  end
end