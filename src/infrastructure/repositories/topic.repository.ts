import { Injectable } from '@nestjs/common';
import { ITopic } from 'src/domain/interfaces/topic.interface';
import { supabase } from 'src/infrastructure/database/supabase-client';
import { TopicDto } from 'src/presentation/dtos/topic.dto';

@Injectable()
export class TopicRepository {
  async getAll(): Promise<ITopic[] | null> {
    const { data, error } = await supabase.from('topics').select('*');

    if (error) throw new Error(`Failed to fetch topics`);
    return data || null;
  }

  async getById(topicId: number): Promise<ITopic | null> {
    console.log(topicId);
    const { data, error } = await supabase
      .from('topics')
      .select('*')
      .eq('id', topicId)
      .single();

    if (error) throw new Error(`Failed to fetch topic with id ${topicId}`);
    return data || null;
  }

  async save(topic: TopicDto): Promise<ITopic | null> {
    const { data, error } = await supabase
      .from('topics')
      .insert(topic)
      .select();

    if (error) throw new Error(`Failed save u ser ${error}`);
    return data[0] || null;
  }

  async update(topic: TopicDto): Promise<ITopic | null> {
    const { data, error } = await supabase
      .from('topics')
      .update({
        ...topic,
        updated_at: new Date().toISOString(),
      })
      .eq('id', topic.id)
      .select()
      .single();

    if (error) throw new Error(`Failed update topic ${error}`);
    return data || null;
  }

  async delete(topicId: string) {
    const { error } = await supabase.from('topics').delete().eq('id', topicId);
    if (error) throw new Error(`Failed save user ${error}`);
    return topicId;
  }
}
