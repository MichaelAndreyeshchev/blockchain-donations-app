# Required imports needed to make the magic happen!
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.core.paginator import Paginator
from django.http import HttpResponseRedirect
from .render import Render
import json
from web3 import Web3

# keys
project_id = "4d8be1a060c04c7fa2dce9b3c72e6f27"
project_secret = "db243bd59b1740e1b9a76b5d868132da"

endpoint = "https://ropsten.infura.io/v3/4d8be1a060c04c7fa2dce9b3c72e6f27" # Infura endpoint

web3 = Web3(Web3.HTTPProvider(endpoint)) # We initiate web3

address = web3.toChecksumAddress("ENTER CONTRACT ADRESS HERE!!!") # Smart contract's address
abi = json.loads("ENTER CONTRACT ABI HERE!!!") # Smart contract's abi

contract = web3.eth.contract(address = address, abi = abi) # Smart contract instance

# Calling Smart Contract Functions:

def donate():
    tx_hash = contract.functions.donate().transact()
    receipt = web3.eth.waitForTransactionReceipt(tx_hash)
    print(receipt)