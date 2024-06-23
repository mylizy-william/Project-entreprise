import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { deleteModule } from '../../../services/module/moduleService';

const DeleteModule = ({ module, onClose }) => {
  const { authState } = useContext(AuthContext);

  const handleDelete = async () => {
    try {
      await deleteModule(module._id, authState.token);
      onClose();
      window.location.reload(); // Refresh the page to reflect changes
    } catch (error) {
      console.error('Failed to delete module', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Supprimer Module</h2>
      <p>Êtes-vous sûr de vouloir supprimer ce module ?</p>
      <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded w-full">
        Supprimer
      </button>
      <button onClick={onClose} className="bg-gray-500 text-white p-2 rounded w-full mt-2">
        Annuler
      </button>
    </div>
  );
};

export default DeleteModule;
