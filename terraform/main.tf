terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "eu-north-1"
}

resource "aws_instance" "devops_server" {
  ami           = "ami-0826f7fac3eaaa32a"
  instance_type = "t3.small"

  tags = {
    Name = "devops-terraform-server"
  }
}
