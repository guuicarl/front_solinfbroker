<template>
  <div class="py-40 flex justify-center mb-14" v-if="this.$root.authenticated">
    <img src="../assets/images/Investing-cuate.png" width="765" alt="money" class="mr-36 -mt-40">
    <!-- card vem aqui -->
    <div class="bg-white rounded-lg shadow-2x1 w-1/2 flex-initial h-1/2">
      <!-- header -->
      <header
        class="
          bg-gray-800
          rounded-t-lg
          py-3
          px-8
          text-xl
          font-extrabold
          text-gray-100
        "
      >
        WALLET
      </header>
      <div class="p-8">
        <div class="mt-10 sm:mt-0">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="stocks"
                    class="block text-sm font-medium text-gray-700"
                    v-if="filtroStocks"
                    >Stock Name:
                  </label>
                  <select
                    id="stock"
                    name="stock"
                    autocomplete="stock-name"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-700
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      sm:text-sm
                    "
                    v-model="stock"
                  >
                    <option selected>---- Selecione uma stock ----</option>
                    <option
                      v-for="wallet in filtroStocks"
                      :key="wallet"
                      v-on:click="getMoeda()"
                    >
                      {{ wallet.stockName }}
                    </option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label
                    for="volume"
                    class="block text-sm font-medium text-gray-700"
                    v-if="mostrar"
                    >Volume:
                  </label>
                  <input
                    v-model="walletUser[0].volume"
                    type="text"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      lg:text-lg
                      border border-gray-500
                      rounded-md
                    "
                    v-if="mostrar"
                    readonly
                  />
                </div>

                <div class="col-span-1">
                  <label
                    for="bid-min"
                    class="block text-sm font-medium text-gray-700"
                    v-if="mostrar"
                    >Bid min:
                  </label>
                  <input
                    v-model="bid_min"
                    type="text"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      lg:text-lg
                      border border-gray-500
                      rounded-md
                    "
                    v-if="mostrar"
                    readonly
                  />
                </div>

                <div class="col-span-1">
                  <label
                    for="bid-max"
                    class="block text-sm font-medium text-gray-700"
                    v-if="mostrar"
                    >Bid max:
                  </label>
                  <input
                    v-model="bid_max"
                    type="text"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      lg:text-lg
                      border border-gray-500
                      rounded-md
                    "
                    v-if="mostrar"
                    readonly
                  />
                </div>

                <div class="col-span-1">
                  <label
                    for="ask-min"
                    class="block text-sm font-medium text-gray-700"
                    v-if="mostrar"
                    >Ask min:
                  </label>
                  <input
                    v-model="ask_min"
                    type="text"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      lg:text-lg
                      border border-gray-500
                      rounded-md
                    "
                    v-if="mostrar"
                    readonly
                  />
                </div>

                <div class="col-span-1">
                  <label
                    for="ask-max"
                    class="block text-sm font-medium text-gray-700"
                    v-if="mostrar"
                    >Ask max:
                  </label>
                  <input
                    v-model="ask_max"
                    type="text"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      lg:text-lg
                      border border-gray-500
                      rounded-md
                    "
                    v-if="mostrar"
                    readonly
                  />
                </div>

                <div class="col-span-1">
                  <label
                    for="valor-aproximado"
                    class="block text-sm font-medium text-gray-700"
                    v-if="mostrar"
                    >Valor aproximado:
                  </label>
                  <input
                    v-model="valor"
                    type="text"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      lg:text-lg
                      border border-gray-500
                      rounded-md
                    "
                    v-if="mostrar"
                    readonly
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="dinheiro"
                    class="block text-sm font-medium text-gray-700"
                    >Dinheiro em caixa:
                  </label>
                  <input
                    type="text"
                    name="dinheiro"
                    id="dinheiro"
                    autocomplete="dinheiro"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      lg:text-lg
                      border border-gray-500
                      rounded-md
                    "
                    v-model="this.dollar"
                    readonly
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-gray-700
                  hover:bg-gray-600
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                @click="getStockUser"
              >
                RECUPERAR VALORES
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="erro"
        class="
          bg-red-100
          border border-red-400
          text-red-700
          px-4
          py-3
          rounded
          relative
        "
        role="alert"
      >
        <strong class="font-bold">Selecione uma stock valida!</strong>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            @click="erro = false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { VMoney } from "v-money";
export default {
  data: function () {
    return {
      erro: false,
      users: [],
      id: 0,
      valor: "",
      dollar: "",
      ask_max: "",
      ask_min: "",
      bid_min: "",
      bid_max: "",
      stock: "---- Selecione uma stock ----",
      wallets: [
        {
          id: {
            id_stock: 0,
            user: {
              dollar_balance: 0,
            },
          },
          stock_name: "",
          volume: 0,
        },
      ],
      walletUser: [
        {
          id: {
            id_stock: 0,
            user: {
              dollar_balance: 0,
            },
          },
          stock_name: "",
          volume: 0,
        },
      ],
      mostrar: false,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
    };
  },
  created() {
    this.idUsuario();
  },
  computed: {
    filtroStocks: function(){
      return this.wallets.filter(i => i.volume > 0)
    }
  },
  methods: {
    async idUsuario() {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser();
        let accessToken = this.$auth.getAccessToken();
        try {
          let response = await axios.get(
            `http://localhost:8082/u/${this.claims.name}`,

            {
              headers: { Authorization: "Bearer " + accessToken },
            }
          );
          this.id = response.data;
        } catch (error) {
          this.id = `${error}`;
        }
        try {
          let response = await axios.get(
            `http://localhost:8082/wallet/${this.id}`,
            {
              headers: { Authorization: "Bearer " + accessToken },
            }
          );
          this.wallets = response.data;
          console.log(this.wallets)
        } catch (error) {
          this.wallets = `${error}`;
        }
        try {
          let response = await axios.get(
            `http://localhost:8082/user/${this.id}`,
            {
              headers: { Authorization: "Bearer " + accessToken },
            }
          );
          this.dollar = response.data.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          });
        } catch (error) {
          this.wallets = `${error}`;
        }
      }
    },
    async getStockUser() {
      if (this.teste != "---- Selecione uma stock ----") {
        this.erro = false;
        this.mostrar = true;
        if (this.$root.authenticated) {
          this.claims = await this.$auth.getUser();
          let accessToken = this.$auth.getAccessToken();
          try {
            let response = await axios.get(
              `http://localhost:8082/${this.id}/${this.stock}`,
              {
                headers: { Authorization: "Bearer " + accessToken },
              }
            );
            this.walletUser = response.data;
          } catch (error) {
            this.walletUser = `${error}`;
          }
          try {
            let response = await axios.get(
              `http://localhost:8085/${this.stock}`,
              {
                headers: { Authorization: "Bearer " + accessToken },
              }
            );
            this.ask_max = response.data[0].askMax.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
            this.ask_min = response.data[0].askMin.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
            this.bid_min = response.data[0].bidMin.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
            this.bid_max = response.data[0].bidMax.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
            this.stock = response.data;
          } catch (error) {
            this.stock = `${error}`;
          }
        }
        this.teste = this.walletUser[0].volume * this.stock[0].askMin;
        this.valor = this.teste.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
      } else {
        this.erro = true;
      }
    },
  },
  directives: { money: VMoney },
};
</script>