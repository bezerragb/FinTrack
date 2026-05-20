import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useState } from 'react';

import { useFinanceStore } from '../store/useFinanceStore';

import { styles } from '../styles/addEntryStyles';

import { Picker } from '@react-native-picker/picker';

export default function AddEntry({ navigation }: any) {

  const [amount, setAmount] = useState('');

  const [type, setType] = useState<'income' | 'expense'>(
    'expense'
  );

  const [title, setTitle] = useState('');

  const [category, setCategory] = useState('Alimentação');
  
  const addEntry = useFinanceStore(
    (state) => state.addEntry
  );

  async function handleAdd() {

    if (!amount || !title) return;

    await addEntry({
      id: String(Date.now()),
      title,
      amount: Number(amount),
      type,
      category,
      date: new Date().toISOString(),
    });

    navigation.goBack();
  }

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.title}>
        Adicionar Transação
      </Text>

      <View style={styles.card}>

        <Text style={styles.sectionTitle}>
          Nova Transação
        </Text>

        {/* TIPO */}

        <Text style={styles.label}>
          Tipo
        </Text>

        <View style={styles.switchContainer}>

          <TouchableOpacity
            style={[
              styles.switchButton,

              type === 'expense' &&
                styles.switchButtonActive,
            ]}
            onPress={() => setType('expense')}
          >

            <Text style={styles.switchText}>
              Despesa
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.switchButton,

              type === 'income' &&
                styles.switchButtonActive,
            ]}
            onPress={() => setType('income')}
          >

            <Text style={styles.switchText}>
              Ganho
            </Text>

          </TouchableOpacity>

        </View>

        {/* VALOR */}

        <Text style={styles.label}>
          Valor (R$)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="0,00"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        {/* DESCRIÇÃO */}

        <Text style={styles.label}>
          Descrição
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Compras do mercado"
          value={title}
          onChangeText={setTitle}
        />

        {/* TAG */}

        {/* CATEGORIA */}

<Text style={styles.label}>
  Categoria
</Text>

<View style={styles.pickerContainer}>

  <Picker
    selectedValue={category}
    onValueChange={(itemValue) =>
      setCategory(itemValue)
    }
  >

    <Picker.Item
      label="Alimentação"
      value="Alimentação"
    />

    <Picker.Item
      label="Transporte"
      value="Transporte"
    />

    <Picker.Item
      label="Lazer"
      value="Lazer"
    />

    <Picker.Item
      label="Salário"
      value="Salário"
    />

  </Picker>

</View>

        {/* BOTÕES */}

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >

            <Text style={styles.cancelButtonText}>
              Cancelar
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAdd}
          >

            <Text style={styles.addButtonText}>
              Adicionar
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
}