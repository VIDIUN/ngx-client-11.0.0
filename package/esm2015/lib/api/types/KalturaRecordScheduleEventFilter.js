/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRecordScheduleEventBaseFilter } from './KalturaRecordScheduleEventBaseFilter';
/**
 * @record
 */
export function KalturaRecordScheduleEventFilterArgs() { }
export class KalturaRecordScheduleEventFilter extends KalturaRecordScheduleEventBaseFilter {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRecordScheduleEventFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaRecordScheduleEventFilter'] = KalturaRecordScheduleEventFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50RmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9DQUFvQyxFQUE0QyxNQUFNLHdDQUF3QyxDQUFDOzs7OztBQU94SSxNQUFNLHVDQUF3QyxTQUFRLG9DQUFvQzs7OztJQUl0RixZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUM1RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50QmFzZUZpbHRlciwgS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50RmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudEZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRGaWx0ZXInXSA9IEthbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50RmlsdGVyOyJdfQ==