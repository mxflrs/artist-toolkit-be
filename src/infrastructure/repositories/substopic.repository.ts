import { Injectable } from '@nestjs/common';
import { ISubtopic } from 'src/domain/interfaces/subtopic.interface';
import { supabase } from 'src/infrastructure/database/supabase-client';
import { SubtopicDto } from 'src/presentation/dtos/subtopic.dto';

@Injectable()
export class SubtopicRepository {
  async save(subtopic: SubtopicDto): Promise<ISubtopic | null> {
    const { data, error } = await supabase
      .from('subtopics')
      .insert(subtopic)
      .select();

    if (error) throw new Error(`Failed to save subtopic ${error}`);
    return data[0] || null;
  }

  async getAll(): Promise<ISubtopic[] | null> {
    const { data, error } = await supabase.from('subtopics').select('*');

    if (error) throw new Error(`Failed to fetch suptopics`);
    return data || null;
  }

  async getById(subtopicId: number): Promise<ISubtopic | null> {
    const { data, error } = await supabase
      .from('subtopics')
      .select('*')
      .eq('id', subtopicId)
      .single();

    if (error) throw new Error(`Failed to fetch topic with id ${subtopicId}`);
    return data || null;
  }

  async update(subtopic: SubtopicDto): Promise<ISubtopic | null> {
    const { data, error } = await supabase
      .from('subtopics')
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
      .from('subtopics')
      .delete()
      .eq('id', subtopicId);
    if (error) throw new Error(`Failed save user ${error}`);
    return subtopicId;
  }
}
