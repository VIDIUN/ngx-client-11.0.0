/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveEntryServerNodeBaseFilter } from './KalturaLiveEntryServerNodeBaseFilter';
/**
 * @record
 */
export function KalturaLiveEntryServerNodeFilterArgs() { }
export class KalturaLiveEntryServerNodeFilter extends KalturaLiveEntryServerNodeBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaLiveEntryServerNodeFilter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaLiveEntryServerNodeFilter'] = KalturaLiveEntryServerNodeFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9DQUFvQyxFQUE0QyxNQUFNLHdDQUF3QyxDQUFDOzs7OztBQU94SSxNQUFNLHVDQUF3QyxTQUFRLG9DQUFvQzs7OztJQUl0RixZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUM1RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlQmFzZUZpbHRlciwgS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVCYXNlRmlsdGVyIHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZUVudHJ5U2VydmVyTm9kZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVFbnRyeVNlcnZlck5vZGVGaWx0ZXInXSA9IEthbHR1cmFMaXZlRW50cnlTZXJ2ZXJOb2RlRmlsdGVyOyJdfQ==