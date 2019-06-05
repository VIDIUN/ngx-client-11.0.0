/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaEntryType } from './KalturaEntryType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryAddFromUploadedFileActionArgs() { }
/** @type {?} */
BaseEntryAddFromUploadedFileActionArgs.prototype.entry;
/** @type {?} */
BaseEntryAddFromUploadedFileActionArgs.prototype.uploadTokenId;
/** @type {?|undefined} */
BaseEntryAddFromUploadedFileActionArgs.prototype.type;
/**
 * Build request payload for service 'baseEntry' action 'addFromUploadedFile'.
 *
 * Usage: Generic add entry using an uploaded file, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export class BaseEntryAddFromUploadedFileAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'addFromUploadedFile' },
            entry: { type: 'o', subTypeConstructor: KalturaBaseEntry, subType: 'KalturaBaseEntry' },
            uploadTokenId: { type: 's' },
            type: { type: 'es', subTypeConstructor: KalturaEntryType, subType: 'KalturaEntryType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    BaseEntryAddFromUploadedFileAction.prototype.entry;
    /** @type {?} */
    BaseEntryAddFromUploadedFileAction.prototype.uploadTokenId;
    /** @type {?} */
    BaseEntryAddFromUploadedFileAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5QWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQmFzZUVudHJ5QWRkRnJvbVVwbG9hZGVkRmlsZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSx5Q0FBMEMsU0FBUSxjQUFnQzs7OztJQU1wRixZQUFZLElBQTZDO1FBRXJELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDLENBQUM7S0FDckg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtZQUMzRixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1NBQ2xGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYUVudHJ5VHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlRW50cnlBZGRGcm9tVXBsb2FkZWRGaWxlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5IDogS2FsdHVyYUJhc2VFbnRyeTtcblx0dXBsb2FkVG9rZW5JZCA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhRW50cnlUeXBlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYmFzZUVudHJ5JyBhY3Rpb24gJ2FkZEZyb21VcGxvYWRlZEZpbGUnLlxuICpcbiAqIFVzYWdlOiBHZW5lcmljIGFkZCBlbnRyeSB1c2luZyBhbiB1cGxvYWRlZCBmaWxlLCBzaG91bGQgYmUgdXNlZCB3aGVuIHRoZSB1cGxvYWRlZCBlbnRyeSB0eXBlIGlzIG5vdCBrbm93blxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCYXNlRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFbnRyeUFkZEZyb21VcGxvYWRlZEZpbGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQmFzZUVudHJ5PiB7XG5cbiAgICBlbnRyeSA6IEthbHR1cmFCYXNlRW50cnk7XG5cdHVwbG9hZFRva2VuSWQgOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhRW50cnlUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEJhc2VFbnRyeUFkZEZyb21VcGxvYWRlZEZpbGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFCYXNlRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYmFzZWVudHJ5JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkRnJvbVVwbG9hZGVkRmlsZScgfSxcblx0XHRcdFx0ZW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnksIHN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeScgfSxcblx0XHRcdFx0dXBsb2FkVG9rZW5JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=