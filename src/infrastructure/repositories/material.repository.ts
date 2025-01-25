import { Injectable } from '@nestjs/common';
import { IMaterial } from 'src/domain/interfaces/material.interface';
import { supabase } from 'src/infrastructure/database/supabase-client';
import { MaterialDto } from 'src/presentation/dtos/material.dto';

@Injectable()
export class MaterialRepository {
  async save(subtopic: MaterialDto): Promise<IMaterial | null> {
    const { data, error } = await supabase
      .from('materials')
      .insert(subtopic)
      .select();

    if (error) throw new Error(`Failed to save subtopic ${error}`);
    return data[0] || null;
  }

  async getAll(): Promise<IMaterial[] | null> {
    const { data, error } = await supabase.from('materials').select('*');

    if (error) throw new Error(`Failed to fetch suptopics`);
    return data || null;
  }

  async getById(subtopicId: number): Promise<IMaterial | null> {
    const { data, error } = await supabase
      .from('materials')
      .select('*')
      .eq('id', subtopicId)
      .single();

    if (error) throw new Error(`Failed to fetch topic with id ${subtopicId}`);
    return data || null;
  }

  async update(subtopic: MaterialDto): Promise<IMaterial | null> {
    const { data, error } = await supabase
      .from('materials')
      .update({
        ...subtopic,
        updated_at: new Date().toISOString(),
      })
      .eq('id', subtopic.id)
      .select()
      .single();

    if (error) throw new Error(`Failed update topic ${error}`);
    return data || null;
  }

  async delete(subtopicId: number) {
    const { error } = await supabase
      .from('materials')
      .delete()
      .eq('id', subtopicId);
    if (error) throw new Error(`Failed save user ${error}`);
    return subtopicId;
  }
}
